import React, { useState } from "react";
import Modal from "react-modal";
import {put, putCoins} from '../../services_rom';
import Service from "../../services";
import "./Profile.css";



function Portefeuille(props) {
  const defaultState = {
    operationValue:"",
    targetUserId:"ALors"
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [state, setState] = useState(defaultState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [addCoin, setAddCoin] = useState(0);
  const [target, setRemoveCoin] = useState(0);
  
  //variable pour eviter de taper :props?.user?.data?.data à chaque fois que je veut récup une info de mes objets de la BDD
  let data = props?.user?.data?.data;

  function handleClickSubmit(event) {
    event.preventDefault();
    console.log("STATE ICI", state)
    if (!state.operationValue){
      alert("Merci de bien vouloir indiquer un nombre de Stable Coin à créditer");
      return;
    }
    putCoins(state)
      .then((response)=> {
        if ("error" in response){
          alert(response.error);
          return;
        }
        alert("Normalement ça a bien marché");
        setState(defaultState)
      })
      .catch((err) => console.log(err));
  }

  function handleChange(event){
    let key=event.target.name;
    let value=event.target.value;
    setState({...state, [key]:value,})
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
            <div><p>Stable coins Possédés: {data?.stableCoin}</p></div>

            <form onChange={handleChange} onSubmit={handleClickSubmit}>
              <input name="operationValue" type="number" value={state.operationValue}></input>
              <button type="submit">ACHAT</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Portefeuille;
