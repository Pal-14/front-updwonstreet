import React, { useState, useCallback, useMemo } from "react";
import Modal from "react-modal";
import { onChange } from "../../Fonctions/Formulaire";
import Service from "../../services";
import PhotoBiens from "./PhotoBiens";

function AjoutDeBiens(props) {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [type, setType] = useState("");
  const [livingArea, setLivingArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [terraceSurface, setTerraceSurface] = useState("");
  const [garage, setGarage] = useState(false);
  const [parking, setParking] = useState(false);
  const [swimmingPool, setSwimmingpool] = useState(false);

  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage1, setSelectedImage1] = useState("");
  const [selectedImage2, setSelectedImage2] = useState("");
  const [selectedImage3, setSelectedImage3] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);

   
  }

  let formData = useMemo(() => new FormData(), []);

  const onFileChange = useCallback(
    (e) => {
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.files[0].type, "premier");
      console.log(e.target.files[0].name, "Deuxième");
      console.log(e.target.name, "troisieme");

      if (
        fileTypeCheck != "image/png" &&
        fileTypeCheck !== "application/pdf" &&
        fileTypeCheck !== "image/jpeg" &&
        fileTypeCheck !== "image/jpg"
      ) {
        console.log(e.target.files[0], "deuxieme");
        e.target.value = ""; //pour remmettre la  value a 0
        alert(
          "Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }
    },
    [formData]
  );

  async function SubmitFileData(e) {
    let body = {
      name: name,
      adress,
      adress,
      city: city,
      postalCode: postalCode,
      description: description,
      type: type,
      livingArea: livingArea,
      rooms: rooms,
      bedrooms: bedrooms,
      terraceSurface: terraceSurface,
      garage: garage,
      parking: parking,
      swimmingPool: swimmingPool,
    };
    let docsSubmitted = await Service.filesProof(formData);
    console.log(docsSubmitted, "log de docsSubmitted");
  
    if (docsSubmitted.status === 400) {
    setName("");
    setAdress("");
    setCity("");
    setDescription("");
    setType("");
    setLivingArea("");
    setRooms("");
    setBedrooms("");
    setTerraceSurface("");
    setGarage("");
    setParking("");
    setSwimmingpool("");
    setMessage(docsSubmitted.data.message);
    e.target.value = "";
    props.setOpenPhoto(true)
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
          <form
            name="ajoutdebiens"
            encType="multipart/form-data"
            method="POST"
            action="/users/upload"
          >
            <div>
              <p>{message}</p>
              <p>{/* {error} */}</p>
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
                  onChange={(e) => onChange(e, setType)}
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
                    class="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>Oui</span>
                </label>
                <label>
                  <input
                    /* onChange={(e) => onChange(e)} */
                    class="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>Non</span>
                </label>
              </label>
              <br />
              <br />
              <label htmlFor="parking">
                Parking :
                <label>
                  <input
                    onChange={(e) => onChange(e, setParking)}
                    class="with-gap"
                    name="group2"
                    type="radio"
                  />
                  <span>Oui</span>
                </label>
                <label>
                  <input
                    /* onChange={(e) => onChange(e ,)} */
                    class="with-gap"
                    name="group2"
                    type="radio"
                  />
                  <span>Non</span>
                </label>
              </label>
              <br /> <br />
              <label htmlFor="piscine">
                Piscine :
                <label>
                  <input
                    onChange={(e) => onChange(e, setSwimmingpool)}
                    class="with-gap"
                    name="group3"
                    type="radio"
                  />
                  <span>Oui</span>
                </label>
                <label>
                  <input
                    /*  onChange={(e) => onChange(e)} */
                    class="with-gap"
                    name="group3"
                    type="radio"
                  />
                  <span>Non</span>
                </label>
              </label>
              <br />
              <br />
              {/* <PhotoBiens /> */}
              <a onClick={SubmitFileData}>Envoyer mes fichiers</a>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default AjoutDeBiens;
