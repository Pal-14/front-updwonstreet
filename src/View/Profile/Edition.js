import React, { useState } from "react";
import Modal from "react-modal";
import { onChange } from "../../Fonctions/Formulaire";
import Service from "../../services";
import Docs from "./Docs";
import Finalisation from "./Finalisation";

function Edition(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit() {
    let body = {
      phoneNumber: phoneNumber,
      adress: adress,
      city: city,
      country: country,
      postalCode: postalCode,
      dateOfBirth: dateOfBirth,
    };
    let accountPut = await Service.editUser(body);
    console.log(accountPut);
    setMessage(accountPut.data.message);
    if (accountPut.data.success) {
      props.setIsLoggedIn(false);
    }
    if (accountPut.data.success) {
      {
        closeModal();
      }
    }
  }

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Modifier mon profil</span>
        <p>Tout pour modifier vos informations personnelles</p>

        <a  href={() => false} id="rouge" onClick={openModal}>
          Ici pour modifier
        </a>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <a  href={() => false} onClick={closeModal}>Fermer</a>

          <div>
            <p>{message}</p>
            <p>{error}</p>
            <label htmlFor="telephone">
              Numéro de téléphone :
              <input
                onChange={(e) => onChange(e, setPhoneNumber)}
                type="tel"
                placeholder="N° de téléphone"
                name="telephone"
                id="telephone"
              ></input>
            </label>
            <br />

            <label htmlFor="dob">
              Date de naissance :
              <input
                onChange={(e) => onChange(e, setDateOfBirth)}
                type="date"
                placeholder="Date de naissance"
                name="dob"
              ></input>
              <br />
            </label>

            <label htmlFor="Adresse">
              Adresse :
              <input
                onChange={(e) => onChange(e, setAdress)}
                type="text"
                placeholder="Adresse"
              ></input>
            </label>
            <br />

            <label htmlFor="Ville">
              Ville :
              <input
                onChange={(e) => onChange(e, setCity)}
                type="text"
                placeholder="Ville"
              ></input>
            </label>
            <br />

            <label htmlFor="CodePostal">
              Code postal :
              <input
                onChange={(e) => onChange(e, setPostalCode)}
                type="text"
                placeholder="Code postal"
              ></input>
            </label>
            <br />

            <label htmlFor="Pays">
              Pays :
              <input
                onChange={(e) => onChange(e, setCountry)}
                type="text"
                placeholder="Pays"
              ></input>
            </label>


            <a  href={() => false}
              onRequestClose={closeModal}
              onClick={handleSubmit}
            >Valider les informations</a>

            
            <Docs {...props} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Edition;
