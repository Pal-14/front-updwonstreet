import React from "react";
import Modal from "react-modal";

function Portefeuille() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Consulter mon Portefeuille</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>

        <div>
          <h2>Informations du Portefeuille: </h2>
          <div>
            <p>Stable coins Possédés: Numbers a recup</p>
          </div>
          <div>
            <p>Valeurs total des Stable Coins</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Portefeuille;
