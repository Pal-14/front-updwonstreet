import React, { useState, useCallback, useMemo } from "react";
import Modal from "react-modal";

function AjoutDeBiens(props) {
  const [name, setName]= useState("");
  const [adress, setAdress]= useState("");
  const [city, setCity]= useState("");
  const [description,setDescription]= useState("");
  
  const [type, setType]= useState("");
  const [livingArea, setLivingArea]= useState("");
  const [rooms, setRooms]= useState("");
  const [bedrooms, setBedrooms]= useState("");
  const [terraceSurface,setTerraceSurface]= useState("");
  const [garage, setGarage]= useState(false);
  const [parking, setParking]= useState(false);
  const [swimmingPool,setSwimmingpool]= useState(false);
  const [selectedImage, setSelectedImage] = useState();
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
      let fileChange = e.target.files[0];
      let fileTypeCheck = e.target.files[0].type;
      console.log(e.target.files[0].type, "premier");
      console.log(e.target.files[0].name, "Deuxième");
      console.log(e.target.name, "troisieme");

      if (
        fileTypeCheck != "image/png" &&
        "application/pdf" &&
        "image/jpeg" &&
        "image/jpg"
      ) {
        console.log(e.target.files[0], "deuxieme");
        e.target.value = ""; //pour remmettre la  value a 0
        alert(
          "Format de fichier non pris en charge seulement .pdf / .png / .jpg /.jpeg"
        );
      } else {
        formData.append(e.target.name, e.target.files[0]);
      }

      setSelectedImage(e.target.files[0]);
    },
    [formData]
  );

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
            encType="multipart/form-data"
            method="POST"
            action="/users/upload"
          >
            <div>
              <p>{message}</p>
              <p>{/* {error} */}</p>
              <label htmlFor="telephone">
                Adresse :
                <input
                  /* onChange={(e) => onChange(e, )} */
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
                  /*       onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="Code Postal"
                ></input>
              </label>
              <br />
              <label htmlFor="ville">
                Ville :
                <input
                  /*  onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="Ville du bien"
                  name="ville"
                ></input>
                <br />
              </label>
              <label htmlFor="description">
                Description :
                <textarea
                  /*    onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="Description du bien"
                ></textarea>
              </label>
              <br />
              <label htmlFor="type">
                Type de bien :
                <input
                  /*     onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="Type de bien ex:(Appartement, Maison, Villa,etc...)"
                ></input>
              </label>
              <br />
              <label htmlFor="surface">
                Surface Habitable :
                <input
                  /*      onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="Superficie en M²"
                ></input>
              </label>
              <br />
              <label htmlFor="pieces">
                Nombre de Pièces :
                <input
                  /*      onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="4"
                ></input>
              </label>
              <br />
              <label htmlFor="chambres">
                Nombre de Chambres :
                <input
                  /*      onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="3"
                ></input>
              </label>
              <br />
              <label htmlFor="surfaceterrain">
                Superficie du Terrain :
                <input
                  /*      onChange={(e) => onChange(e, )} */
                  type="text"
                  placeholder="Superficie du terrain en M²"
                ></input>
              </label>
              <br /> <br />
              <label htmlFor="garage">
                Garage :
                <label>
                  <input
                    /*      onChange={(e) => onChange(e, )} */ class="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>Oui</span>
                </label>
                <label>
                  <input
                    /*      onChange={(e) => onChange(e, )} */ class="with-gap"
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
                    /*      onChange={(e) => onChange(e, )} */ class="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>Oui</span>
                </label>
                <label>
                  <input
                    /*      onChange={(e) => onChange(e, )} */ class="with-gap"
                    name="group1"
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
                    /*      onChange={(e) => onChange(e, )} */ class="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>Oui</span>
                </label>
                <label>
                  <input
                    /*      onChange={(e) => onChange(e, )} */ class="with-gap"
                    name="group1"
                    type="radio"
                  />
                  <span>Non</span>
                </label>
              </label>
              <br />
              <br />
              <input
                onRequestClose={closeModal}
                /*  onClick={handleSubmit} */
                type="submit"
              ></input>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default AjoutDeBiens;
