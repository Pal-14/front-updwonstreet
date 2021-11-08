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
      <a id="rouge" onClick={openModal}>Consulter mes Biens</a>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <a onClick={closeModal}>close</a>
        <div>
          <h2> Liste de Mes Biens : </h2>

          <div><p>Nom du Bien: </p></div>
          <div><p>Adresse:</p></div>
          <div><p>Ville: </p></div>
          <div><p>Type de Bien: </p></div>
          <div><p>Nombre de pièces): </p></div>
          <div><p>Chambre(s): </p></div>
          <div><p>Surface de terrain:</p></div>
          <div><p>Garage: </p></div>
          <div><p>Parking: </p></div>
          <div><p> Zone de parcelle: </p></div>

          
        </div>

       
          
          
      </Modal>
    </div>
  );
}

export default Biens;
