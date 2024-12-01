import { useDispatch } from "react-redux";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import s from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { useEffect, useState } from "react";
import ModalEditing from "../ModalEditing/ModalEditing";
import { editContact } from "../../redux/contacts/operations";

export default function Contact({ id, name, number }) {
  const [modalEditing, setModalEditing] = useState(false);
  const [editableContact, seteditableContact] = useState({});
  const [updatedContact, setUpdatedContact] = useState({});

  const dispatch = useDispatch();
  const hendleDelete = (id) => dispatch(deleteContact(id));

  const handleClick = () => {
    setModalEditing(true);
    openEditForm({ id: id, name: name, number: number });
  };

  function closeModalEditing() {}

  const handelSubmitEditContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const editName = form.name.value;
    const editNumber = form.number.value;
    const newContact = { id: id, name: editName, number: editNumber };
    setUpdatedContact(newContact);

    setModalEditing(false);
  };

  useEffect(() => {
    dispatch(editContact(updatedContact));
  }, [dispatch, updatedContact]);

  const openEditForm = (contactItem) => {
    seteditableContact(contactItem);
  };

  return (
    <div className={s.divContact}>
      <ModalEditing
        isOpen={modalEditing}
        onClose={closeModalEditing}
        editСontact={editableContact}
        handelSubmit={handelSubmitEditContact}
      />
      <ul className={s.ulContact}>
        <li>
          <p className={s.contactParagraph}>{name}</p>
        </li>
        <li>
          <p className={s.contactParagraph}>{number}</p>
        </li>
      </ul>
      <div className={s.buttonDiv}>
        <button
          className={s.contactButtonDel}
          type="clicks"
          onClick={() => hendleDelete(id)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={s.contactButtonEdit}
          type="clicks"
          onClick={handleClick}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </div>
  );
}
