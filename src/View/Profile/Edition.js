import React, { useState } from "react";
import Modal from "react-modal";
import { onChange } from "../../Fonctions/Formulaire";
import Service from "../../services";
import Docs from "./Docs";

function Edition(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("")
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
    <div>
      <button onClick={openModal}>Modifier mon Profil</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>

        <div>
          <h3>{message}</h3>
          <h3>{error}</h3>
          <label htmlFor="telephone">
            Numéro de Téléphone :
            <input
              onChange={(e) => onChange(e, setPhoneNumber)}
              type="tel"
              placeholder="N° de Téléphone"
              name="telephone"
              id="telephone"
            ></input>
          </label>
          <br />

          <label htmlFor="dob">
            Date de Naissance :
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
            Code Postal :
            <input
              onChange={(e) => onChange(e, setPostalCode)}
              type="text"
              placeholder="Code Postal"
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
          <br />

         
<Docs/>
         

          <input
            onRequestClose={closeModal}
            onClick={handleSubmit}
            type="submit"
          ></input>
        </div>
      </Modal>
    </div>
  );
}

export default Edition;
