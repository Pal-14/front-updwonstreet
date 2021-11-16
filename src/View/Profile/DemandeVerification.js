import React, { useState } from "react";
import Modal from "react-modal";
/* import { onChange } from "../../Fonctions/Formulaire"; */
import Service from "../../services";
import Docs from "./Docs";
import Finalisation from "./Finalisation";

function DemandeVerification(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [message, setMessage] = useState("");
  /* const [error, setError] = useState(""); */

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title "> Devenir membre vérifié </span>
        <p>Accédez à toutes les fonctionnalités en devenant membre vérifié</p>

        <a  id="rouge" onClick={openModal}>
          Ici pour modifier
        </a>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <a onClick={closeModal}>Fermer</a>
          <div class="card-action">
            <Docs {...props} /> <Finalisation {...props} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default DemandeVerification;
