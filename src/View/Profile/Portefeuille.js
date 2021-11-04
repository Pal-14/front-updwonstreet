import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";

function Portefeuille(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");
  const [addCoin, setAddCoin] = useState(0);
  const [removeCoin, setRemoveCoin] = useState (0);



  async function handleSubmit() {
    let body;
    if(addCoin <= 0 && removeCoin <= 0 ){
      setMessage("Veuillez entrer un champ")
    }
    if (addCoin <0 || removeCoin <0){
      setMessage("Veuillez entrer une bonne valeur")
    }
    if (addCoin <0  && removeCoin <0 ){
      setMessage("Veuillez ne remplir qu'un seul champ à la fois")
    }
    if (addCoin >0 && removeCoin === 0) {
      body = {
      operationValue: addCoin,
      }
    }
    if (removeCoin >0 && addCoin === 0) {
      let removeC = removeCoin *-1
      body = {
      operationValue: removeC
      }
    }  
    if (body?.operationValue !== undefined){
    let addOrRemoveCoin = await Service.userPortfolio(body);
    console.log(addOrRemoveCoin);
    setMessage(addOrRemoveCoin)}
   
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Consulter mon Portefeuille</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>

        <div>
          <h2>Informations du Portefeuille: </h2>
          <div>
            <p>Stable coins Possédés: {props?.data?.data?.stableCoins}</p>
          </div>
          <div>
            <p>Valeurs total des Stable Coins</p>
          </div>

          <div>
            <label for="">Achat de Stable Coin(s)</label>
            <h3>{message}</h3>
            <h3>{erreur}</h3>
            <input onchange={(e) => onchange(e, setAddCoin)} name="StableCoins" type="text"></input>
           
          </div>
          <br/>

          <div>
            <label for="">Vente de Stable Coin(s)</label>
            <h3>{message}</h3>
            <h3>{erreur}</h3>
            <input onchange={(e) => onchange(e, setRemoveCoin)} name="StableCoins" type="text"></input>
           
          </div>

          <div>
            <button onClick={handleSubmit}  type="submit" >Acheter/Vendre</button>
          </div>

        </div>
        
      </Modal>

    </div>
  );
}

export default Portefeuille;
