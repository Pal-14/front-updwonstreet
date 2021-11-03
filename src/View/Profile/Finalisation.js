import React from "react";
import { useState } from "react";
import { onChange } from "../../Fonctions/Formulaire";
import Service from "../../services";

function Finalisation() {
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdress] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    let body = {
      telephone: telephone,
      adresse: adresse,
      ville: ville,
      codePostal: codePostal,
      dateOfBirth: dateOfBirth,
    };
    let accountPut = await Service.feedUsers(body);
    if (accountPut.data.success) {
      setMessage(accountPut.data.message);
    } else {
      setMessage(accountPut.data.message);
    }
  }

  return (
    <div>
      <h3>{message}</h3>
      <label for="telephone">
        Numéro de Téléphone :
        <input
          onChange={(e) => onChange(e, setTelephone)}
          type="tel"
          placeholder="0123456789"
          name="telephone"
          id="telephone"
        ></input>
      </label>
      <br />

      <label for="Adresse">
        Adresse :
        <input
          onChange={(e) => onChange(e, setAdress)}
          type="text"
          placeholder="Adresse"
        ></input>
      </label>
      <br />

      <label for="Ville">
        Ville :
        <input
          onChange={(e) => onChange(e, setVille)}
          type="text"
          placeholder="Ville"
        ></input>
      </label>
      <br />

      <label for="CodePostal">
        Code Postal :
        <input
          onChange={(e) => onChange(e, setCodePostal)}
          type="text"
          placeholder="Code Postal"
        ></input>
      </label>
      <br />

      <label for="dob">
        Date de Naissance :
        <input
          onChange={(e) => onChange(e, setDateOfBirth)}
          type="date"
          placeholder="Date de naissance"
          name="dob"
        ></input>{" "}
        <br />
      </label>

      <div>
        <p>
          Pièce d'identité
          <input
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
          ></input>
        </p>

        <br />
      </div>
      <div>
        <p>
          R.I.B
          <input
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
          ></input>
        </p>

        <br />
      </div>
      <div>
        <p>
          Justificatif de domicile
          <input
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
          ></input>
        </p>

        <br />
        <input onClick={(e) => handleSubmit(e)} type="submit"></input>
      </div>
    </div>
  );
}

export default Finalisation;
