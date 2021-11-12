import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";
import "./Profile.css";

function Portefeuille(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [addCoin, setAddCoin] = useState(0);
  const [removeCoin, setRemoveCoin] = useState(0);

  //variable pour eviter de taper :props?.user?.data?.data à chaque fois que je veut récup une info de mes objets de la BDD
  let data = props?.user?.data?.data;

  async function handleSubmit() {
    let body;
    if (addCoin <= 0 && removeCoin <= 0) {
      setMessage("Veuillez entrer un champ");
    }
    if (addCoin < 0 || removeCoin < 0) {
      setMessage("Veuillez entrer une bonne valeur");
    }
    if (addCoin < 0 && removeCoin < 0) {
      setMessage("Veuillez ne remplir qu'un seul champ à la fois");
    }
    if (addCoin > 0 && removeCoin === 0) {
      body = {
        operationValue: addCoin,
      };
    }
    if (removeCoin > 0 && addCoin === 0) {
      let removeC = removeCoin * -1;
      body = {
        operationValue: removeC,
      };
    }
    if (body?.operationValue !== undefined) {
      let addOrRemoveCoin = await Service.editUserCoin(body);
      console.log(addOrRemoveCoin);
      setMessage(addOrRemoveCoin);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Consulter mon Portefeuille</span>
        <p>Tout les informations sur votre portefeuille et ça gestion</p>
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
            <div>
              <p>Stable coins Possédés: {data?.stableCoin}</p>
            </div>

            <div>
              <label for="">Achat de Stable Coin(s)</label>
              <p>{message}</p>
              <p>{error}</p>
              <input
                onchange={(e) => onchange(e, setAddCoin)}
                name="StableCoins"
                type="text"
              ></input>
            </div>
            <br />

            <div>
              <label for="">Vente de Stable Coin(s)</label>
              <input
                onchange={(e) => onchange(e, setRemoveCoin)}
                name="StableCoins"
                type="text"
              ></input>
            </div>

            <div>
              <a onClick={handleSubmit} type="submit">
                Acheter/Vendre
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Portefeuille;