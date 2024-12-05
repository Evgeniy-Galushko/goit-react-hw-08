import { useDispatch } from "react-redux";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import s from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalEditing from "../ModalEditing/ModalEditing";
import ModalDelete from "../ModalDelete/ModalDelete";
import { editContact } from "../../redux/contacts/operations";
import { Toaster } from "react-hot-toast";

export default function Contact({ id, name, number }) {
  const [modalEditing, setModalEditing] = useState(false);
  const [modalDelete, setModalDeleteg] = useState(false);

  const [editableContact, setEditableContact] = useState({});

  const dispatch = useDispatch();
  const hendleDelete = (id) => dispatch(deleteContact(id));

  const handleClick = () => {
    setModalEditing(true);
    openEditForm({ id: id, name: name, number: number });
  };

  // function closeModalEditing() {}

  const handelSubmitEditContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const editName = form.name.value;
    const editNumber = form.number.value;
    const newContact = { id: id, name: editName, number: editNumber };

    dispatch(editContact(newContact));
    setModalEditing(false);
  };

  const openEditForm = (contactItem) => {
    setEditableContact(contactItem);
  };

  const handleClickDeleteOpen = () => {
    setModalDeleteg(true);
  };

  const handleClickDeleteClose = () => {
    setModalDeleteg(false);
  };

  // const tel = number.replace(/-/g, "").replace(/ /g, "");

  return (
    <div className={s.divContact}>
      <ModalEditing
        isOpen={modalEditing}
        editСontact={editableContact}
        handelSubmit={handelSubmitEditContact}
      />
      <ModalDelete
        isOpen={modalDelete}
        editСontact={editableContact}
        isClose={handleClickDeleteClose}
        handelClick={() => hendleDelete(id)}
      />
      <Toaster
        toastOptions={{
          className: "",
          duration: 4000,
          style: {},
        }}
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
          type="click"
          // onClick={() => hendleDelete(id)}
          onClick={handleClickDeleteOpen}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={s.contactButtonEdit}
          type="click"
          onClick={handleClick}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </div>
  );
}
