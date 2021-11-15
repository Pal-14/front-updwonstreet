import React, { useState } from "react";
import Modal from "react-modal";
import Service from "../../services";
import "./Profile.css";

function Portefeuille(props) {
  const defaultState = {
    operationValue: "",
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [state, setState] = useState(defaultState);
  const [state1, setState1] = useState(defaultState);
  /* const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [addCoin, setAddCoin] = useState(0);
  const [target, setRemoveCoin] = useState(0); */

  //variable pour eviter de taper :props?.user?.data?.data à chaque fois que je veut récup une info de mes objets de la BDD
  let data = props?.user?.data?.data;

  function handleClickSubmit(event) {
    event.preventDefault();
    console.log("STATE ICI", state);
    if (!state.operationValue) {
      alert(
        "Merci de bien vouloir indiquer un nombre de Stable Coin à créditer"
      );
      return;
    }
    Service.editUserCoin(state)
      .then((response) => {
        if ("error" in response) {
          alert(response.error);
          return;
        }
        setState(defaultState);
        if (response.data.success) {
          props.setIsLoggedIn(false);
          closeModal();
        }
      })
      .catch((err) => console.log(err));
  }

  function handleClickSubmit1(event) {
    let body
    event.preventDefault();
    console.log("STATE ICI", state1);
    if (!state1.operationValue) {
      alert(
        "Merci de bien vouloir indiquer un nombre de Stable Coin à créditer"
      );
      return;
    } else {
      body = {
        operationValue: state1.operationValue * -1
      }
    }
    Service.editUserCoin(body)
      .then((response) => {
        if ("error" in response) {
          alert(response.error);
          return;
        }
        setState(defaultState);
        if (response.data.success) {
          props.setIsLoggedIn(false);
          closeModal1();
        }
      })
      .catch((err) => console.log(err));
  }

  function handleChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    setState({ ...state, [key]: value });
  }

  function handleChange1(event) {
    let key = event.target.name;
    let value = event.target.value;
    setState1({ ...state1, [key]: value });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  return (
    <div class="card cardProfile">
      <div class="card-content">
        <span class="card-title ">Portefeuille UDS Coins</span>
        <p>Consulter votre solde. Acheter et convertir vos Coins en euros</p>
        <p>
          <a id="rouge" onClick={openModal}>
            {` Achat par Cb `}
          </a>

          <a id="rouge" onClick={openModal1}>
            {` Convertir en euros `}
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

            <form onChange={handleChange} onSubmit={handleClickSubmit}>
              <input
                name="operationValue"
                type="number"
                value={state.operationValue}
              ></input>
              <button type="submit">ACHAT</button>
            </form>
          </div>
        </Modal>
      </div>
      <div>
        <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1}>
          <a onClick={closeModal1}>close</a>
          <div>
            <div>
              <p>Stable coins Possédés: {data?.stableCoin}</p>
            </div>

            <form onChange={handleChange1} onSubmit={handleClickSubmit1}>
              <input
                name="operationValue"
                type="number"
                value={state1.operationValue}
              ></input>
              <button type="submit">VENTE</button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Portefeuille;
