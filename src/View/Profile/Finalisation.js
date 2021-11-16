import React from "react";
import { useState } from "react";
import { onChange } from "../../Fonctions/Formulaire";
import Service from "../../services";

function Finalisation(props) {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("")
  const [message, setMessage] = useState("");
  const [error, setError] = useState ("")


  

  /* let formData = new FormData();
  

  formData.append('cni', myFileInput.files[0], '.jpg')
  formData.append('rib', myFileInput.files[1], '.jpg')
  formData.append('justificatif', myFileInput.files[2], '.jpg')
 */



  async function handleSubmit() {
    let body = {
      userName:userName,
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
      props.setIsLoggedIn(false)
    }
  }

  return (
    <div>
      <h3>{message}</h3>
      <h3>{error}</h3>
      <label for="userName">
        Pseudo :
        <input
          onChange={(e) => onChange(e, setUserName)}
          type="tel"
          placeholder="(Pseudo)"
          name="userName"
          id="userName"
        ></input>
      </label>
      <br />

      <label for="phoneNumber">
        Numéro de téléphone :
        <input
          onChange={(e) => onChange(e, setPhoneNumber)}
          type="tel"
          placeholder="02.12.34.56.78"
          name="phoneNumber"
          id="phoneNumber"
        ></input>
      </label>
      <br />

      <label for="Adresse">
        Adresse :
        <input
          onChange={(e) => onChange(e, setAdress)}
          type="text"
          placeholder="4 rue Charles de Gaulle"
        ></input>
      </label>
      <br />

      <label for="city">
        Ville :
        <input
          onChange={(e) => onChange(e, setCity)}
          type="text"
          placeholder="Nantes"
        ></input>
      </label>
      <br />

      <label for="Pays">
            Pays :
            <input
              onChange={(e) => onChange(e, setCountry)}
              type="text"
              placeholder="France"
            ></input>
          </label>
          <br />

      <label for="CodePostal">
        Code postal :
        <input
          onChange={(e) => onChange(e, setPostalCode)}
          type="text"
          placeholder="44300"
        ></input>
      </label>
      <br />

      <label for="dob">
        Date de naissance :
        <input
          onChange={(e) => onChange(e, setDateOfBirth)}
          type="date"
          placeholder="Date de naissance"
          name="dob"
        ></input>
        <br />
      </label>

      <a href="#" onClick={handleSubmit} id="rouge">Modifier vos données personnelles</a>

    </div>
  );
}

export default Finalisation;
