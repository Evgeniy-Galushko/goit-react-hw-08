import s from "./ModalEditing.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function VideoModal({ isOpen, onClose }) {
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
        <div className={s.modalDiv}>
          <input name="name" type="text" className={s.modalInput} />
          <input name="number" type="tel" className={s.modalInput} />
        </div>
        <button onClick={onClose} className={s.modalButton}>
          SAVE
        </button>
      </div>
    </Modal>
  );
}
