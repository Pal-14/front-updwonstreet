import React from "react";
import Modal from "react-modal";

function Biens() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Consulter mes Biens</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>

       
          <h2>Liste de mes Biens: </h2>
          <div>
            <p>Voir les biens à mettre </p>
          </div>
          
      </Modal>
    </div>
  );
}

export default Biens;
