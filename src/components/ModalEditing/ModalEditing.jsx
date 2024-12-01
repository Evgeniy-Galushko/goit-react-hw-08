import s from "./ModalEditing.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function VideoModal({ isOpen, editСontact, handelSubmit }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(239, 239, 240, 0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      backgroundColor: "wite",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={s.modal}>
        <form className={s.modalDiv} onSubmit={handelSubmit}>
          <input
            name="name"
            type="text"
            className={s.modalInput}
            defaultValue={editСontact.name}
          />
          <input
            name="number"
            type="tel"
            className={s.modalInput}
            defaultValue={editСontact.number}
          />
          <button className={s.modalButton} type="submit">
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
}
