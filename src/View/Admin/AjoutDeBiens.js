import React, { useState, useCallback, useMemo, useEffect } from "react";
import Modal from "react-modal";
import { onChange } from "../../Fonctions/Formulaire";
import Service from "../../services";
import { onRadioChange } from "../../Fonctions/PropositionDeBiens";

function AjoutDeBiens(props) {
  const [isPublic, setIsPublic] = useState(false);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [description, setDescription] = useState("");
  const [typeOfItem, setTypeOfItem] = useState("");
  const [livingArea, setLivingArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [terrace, setTerrace] = useState(false);
  const [terraceSurface, setTerraceSurface] = useState("");
  const [garage, setGarage] = useState(false);
  const [garageNumber, setGarageNumber] = useState(0);
  const [parking, setParking] = useState(false);
  const [parkingNumber, setParkingNumber] = useState(0);
  const [swimmingPool, setSwimmingpool] = useState(false);
  const [otherSpecialPerks, setOtherSpecialPerks] = useState("");

  const [askedPriceByUser, setAskedPriceByUser] = useState("");
  const [fundingStartDate, setFundingStartDate] = useState("");
  const [fundingEndDeadlineDate, setFundingDeadlineData] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{},[garage])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  /* const onRadioChange = (e) => {
    if(e.target.value === "false"){
      setIsPublic("false")
    }else {
      setIsPublic("true")
    }
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(typeof(e.target.value));
    
  }; */

  async function SubmitFileData(e) {
    let body = {
      isPublic: isPublic,
      name: name,
      adress: adress,
      city: city,
      postalCode: postalCode,
      description: description,
      typeOfItem: typeOfItem,
      livingArea: livingArea,
      rooms: rooms,
      bedrooms: bedrooms,
      terrace: terrace,
      terraceSurface: terraceSurface,
      garage: garage,
      garageNumber: garageNumber,
      parking: parking,
      parkingNumber: parkingNumber,
      swimmingPool: swimmingPool,
      otherSpecialPerks: otherSpecialPerks,

      askedPriceByUser: askedPriceByUser,
      fundingStartDate: fundingStartDate,
      fundingEndDeadlineDate: fundingEndDeadlineDate,
    };
    let docsSubmitted = await Service.createItemByAdmin(body);
    console.log(docsSubmitted, "log de docsSubmitted");
    console.log(docsSubmitted.data.itemFundingId, "mon id");

    if (docsSubmitted.status === 200) {
      setIsPublic("false");
      setName("");
      setAdress("");
      setCity("");
      setDescription("");
      setTypeOfItem("");
      setLivingArea("");
      setRooms("");
      setBedrooms("");
      setTerrace("");
      setTerraceSurface("");
      setGarage("");
      setGarageNumber("");
      setParking("");
      setParkingNumber("");
      setSwimmingpool("");
      setOtherSpecialPerks("");

      setAskedPriceByUser("");
      setFundingStartDate("");
      setFundingDeadlineData("");

      setMessage(docsSubmitted.data.message);

      props.setTargetItemFundingId(docsSubmitted.data.itemFundingId);
      console.log(docsSubmitted.data.itemFundingId, "log target fun id");
      e.target.value = "";
      props.setOpenPhoto(true);
      return closeModal();
    } else {
      setError(docsSubmitted.data.error);
    }
  }

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Proposer un bien </span>
        <p>Ici vous pouvez nous proposer des biens </p>
        <p>
          <a id="rouge" onClick={openModal}>
            Ici pour consulter
          </a>
        </p>
      </div>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <a onClick={closeModal}>close</a>

          <div>
            <p>
              {message}
              {error}
            </p>
            <br /> <br />
            <label htmlFor="public">
              Annonce public :
              <label>
                <input
                  onChange={(e) => onChange(e, setIsPublic)}
                  onChange={(e) => onRadioChange(e, setIsPublic)}
                  class="with-gap"
                  name="isPublic"
                  type="radio"
                  value={true}
                />
                <span>Oui</span>
              </label>
              <label>
                <input
                  onChange={(e) => onChange(e, setIsPublic)}
                  onChange={(e) => onRadioChange(e, setIsPublic)}
                  class="with-gap"
                  name="isPublic"
                  type="radio"
                  data-bind="checked:IsChecked, checkedValue: false"
                  value={false}
                />
                <span>Non</span>
              </label>
            </label>
            <br /> <br />
            <label htmlFor="titre">
              Titre de L'annonce :
              <input
                onChange={(e) => onChange(e, setName)}
                type="text"
                placeholder="Titre de l'annonce"
                name="name"
                id="name"
              ></input>
            </label>
            <br />
            <label htmlFor="adress">
              Adresse :
              <input
                onChange={(e) => onChange(e, setAdress)}
                type="text"
                placeholder="Adresse du bien"
                name="adress"
                id="adress"
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
            <label htmlFor="ville">
              Ville :
              <input
                onChange={(e) => onChange(e, setCity)}
                type="text"
                placeholder="Ville du bien"
                name="ville"
              ></input>
              <br />
            </label>
            <label htmlFor="description">
              Description :
              <textarea
                onChange={(e) => onChange(e, setDescription)}
                type="text"
                placeholder="Description du bien"
              ></textarea>
            </label>
            <br />
            <label htmlFor="type">
              Type de bien :
              <input
                onChange={(e) => onChange(e, setTypeOfItem)}
                type="text"
                placeholder="Type de bien ex:(Appartement, Maison, Villa,etc...)"
              ></input>
            </label>
            <br />
            <label htmlFor="surface">
              Surface Habitable :
              <input
                onChange={(e) => onChange(e, setLivingArea)}
                type="text"
                placeholder="Superficie en M²"
              ></input>
            </label>
            <br />
            <label htmlFor="pieces">
              Nombre de Pièces :
              <input
                onChange={(e) => onChange(e, setRooms)}
                type="text"
                placeholder="4"
              ></input>
            </label>
            <br />
            <label htmlFor="chambres">
              Nombre de Chambres :
              <input
                onChange={(e) => onChange(e, setBedrooms)}
                type="text"
                placeholder="3"
              ></input>
            </label>
            <br />
            <label htmlFor="surfaceterrain">
              Superficie du Terrain :
              <input
                onChange={(e) => onChange(e, setTerraceSurface)}
                type="text"
                placeholder="Superficie du terrain en M²"
              ></input>
            </label>
            <br /> <br />
            <label htmlFor="garage">
              Garage :
              <label>
                <input
                  onChange={(e) => onChange(e, setGarage)}
                  onChange={(e) => onRadioChange(e, setGarage)}
                  class="with-gap"
                  name="garage:oui/non"
                  type="radio"
                  value={true}
                />
                <span>Oui</span>
              </label>
              <label>
                <input
                  onChange={(e) => onChange(e, setGarage)}
                  onChange={(e) => onRadioChange(e, setGarage)}
                  class="with-gap"
                  name="garage:oui/non"
                  type="radio"
                  value={false}
                />
                <span>Non</span>

                {garage === true ? <input
                  onChange={(e) => onChange(e, setGarageNumber)}
                  onChange={(e) => onRadioChange(e, setGarage)}
                  type="number"
                  min="0"
                ></input> : <p></p>}
              </label>
            </label>
            <br />
            <br />
            <label htmlFor="parking">
              Parking :
              <label>
                <input
                  onChange={(e) => onChange(e, setParking)}
                  onChange={(e) => onRadioChange(e, setParking)}
                  class="with-gap"
                  name="parking:oui/non"
                  type="radio"
                  value={true}
                />
                <span>Oui</span>
              </label>
              <label>
                <input
                  onChange={(e) => onChange(e, setParking)}
                  onChange={(e) => onRadioChange(e, setParking)}
                  class="with-gap"
                  name="parking:oui/non"
                  type="radio"
                  value={false}
                />
                <span>Non</span>
                <input
                  onChange={(e) => onChange(e, setParkingNumber)}
                  type="number"
                  min="0"
                ></input>
              </label>
            </label>
            <br /> <br />
            <label htmlFor="piscine">
              Piscine :
              <label>
                <input
                  onChange={(e) => onChange(e, setSwimmingpool)}
                  onChange={(e) => onRadioChange(e, setSwimmingpool)}
                  class="with-gap"
                  name="piscine:oui/non"
                  type="radio"
                  value={true}
                />
                <span>Oui</span>
              </label>
              <label>
                <input
                  onChange={(e) => onChange(e, setSwimmingpool)}
                  onChange={(e) => onRadioChange(e, setSwimmingpool)}
                  class="with-gap"
                  name="piscine:oui/non"
                  type="radio"
                  value={false}
                />
                <span>Non</span>
              </label>
            </label>
            <br />
            <br />
            <label htmlFor="piscine">
              Autres :
              <label>
                <input
                  onChange={(e) => onChange(e, setOtherSpecialPerks)}
                  onChange={(e) => onRadioChange(e, setOtherSpecialPerks)}
                  class="with-gap"
                  name="autresActivités"
                  type="radio"
                  value={true}
                />
                <span>Oui</span>
              </label>
              <label>
                <input
                  onChange={(e) => onChange(e, setOtherSpecialPerks)}
                  onChange={(e) => onRadioChange(e, setOtherSpecialPerks)}
                  class="with-gap"
                  name="autresActivités"
                  type="radio"
                  value={false}
                />
                <span>Non</span>
                <input
                  onChange={(e) => onChange(e, setOtherSpecialPerks)}
                  onChange={(e) => onRadioChange(e, setOtherSpecialPerks)}
                  type="text"
                ></input>
             
              </label>
            </label>
            <br />
            <br />
            {/* <PhotoBiens /> */}
            <a onClick={SubmitFileData}>Envoyer mes fichiers</a>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AjoutDeBiens;
