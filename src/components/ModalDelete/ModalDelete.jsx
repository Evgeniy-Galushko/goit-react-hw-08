import s from "./ModalDelete.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ModalDelete({ isOpen, isClose, handelClick }) {
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
        <h1 className={s.titleModal}>
          Are you sure you want to delete this Contact?
        </h1>
        <div className={s.divButtons}>
          <button className={s.modalButton} type="click" onClick={handelClick}>
            YES
          </button>
          <button className={s.modalButton} type="click" onClick={isClose}>
            NO
          </button>
        </div>
      </div>
    </Modal>
  );
}
