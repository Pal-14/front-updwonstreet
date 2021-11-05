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
        <div>
          <h2> Liste de Mes Biens : </h2>

          <div><p>Nom du Bien: </p></div>
          <div><p>Adresse:</p></div>
          <div><p>Ville: </p></div>
          <div><p>Type de Bien: </p></div>
          <div><p>Salon(s): </p></div>
          <div><p>Chambre(s): </p></div>
          <div><p>Surface de terrain:</p></div>
          <div><p>Garage: </p></div>

          <div><p>Email: </p></div>
          <div><p>Téléphone: </p></div>
        </div>

       
          
          
      </Modal>
    </div>
  );
}

export default Biens;
