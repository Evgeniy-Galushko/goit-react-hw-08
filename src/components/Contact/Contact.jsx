import { useDispatch } from "react-redux";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import s from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalEditing from "../ModalEditing/ModalEditing";

export default function Contact({ id, name, number }) {
  const [modalEditing, setModalEditing] = useState(false);

  const dispatch = useDispatch();
  const hendleDelete = (id) => dispatch(deleteContact(id));

  const handleClick = () => {
    setModalEditing(true);
  };

  function closeModalEditing() {
    setModalEditing(false);
  }

  return (
    <div className={s.divContact}>
      <ModalEditing isOpen={modalEditing} onClose={closeModalEditing} />
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
