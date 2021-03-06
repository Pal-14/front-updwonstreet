import React, { useState } from "react";
import "./Catalog.css";
import Modal from "react-modal";
import Service from "../../services";
import Carousel from "./Carousel"


function CardBiens(props) {
  /* Variables d'état */
  const [modalIsOpen, setIsOpen] = useState(false);
  const [numberOfTokens, setNumberOfTokens] = useState();
/*   const [totalAmount, setTotalAmount] = useState();totalAmount  pas encore utilisé*/

  /* Variables */
  let item = props?.item;
  let itemInfo = item?.itemPublicData?.description;
  let itemInfoFinance = item?.itemPublicData?.funding;
 /*  let itemPicturesFromUser = item?.itemPublicData?.itemPicturesFromUser; */   /* pas encore utilisé */
 /* let isPublic = item?.itemPrivateData?.status?.isPublic;  pas encore utilisé */

  /* put /items/buy-initial-token 
  targetItemId priceInStableCoin = totalAmount tokenQuantityOrdered = numberOfTokens JWT */

  const achat = async () => {
    let body = {
      targetItemId: item._id,
      tokenQuantityOrdered: numberOfTokens 
    }
    let achat = await Service.achatTokenBien(body);
    console.log(achat);
    if (achat.data.success) {
      setIsOpen(false);
    }
  }

  const handleNumberOfTokens = (e) => {
    setNumberOfTokens(e.target.value);
    console.log(numberOfTokens);
  };

  /* Ouverture modal */
  const openModal = () => {
    setIsOpen(true);
  };

  /* Fermeture modal */
  const closeModal = () => {
    setIsOpen(false);
  };

  

  console.log("ITEM:", item);

  let Url = `https://backimmo.osc-fr1.scalingo.io/get-public-pic/`;

  /* Modification de compte */
  const editValueOfItem = async (user, key, value) => {
    let body = {
      targetItemId: item._id,
      keyOfPropertyToChange: key,
      newValue: value,
    };
    let change = await Service.editItemByAdmin(body);
    if (change.data.success) {
      setIsOpen(false);
    }
    console.log("Change:", change);
  };

  /* Modification du bien */
  const editItem = async (item, key, value) => {
    let body = {
      targetItemId: item._id,
      keyOfPropertyToChange: key,
      newValue: value,
    };
    let change = await Service.editItemByAdmin(body);
    if (change.data.success) {
      setIsOpen(false);
    }
    console.log("Change:", change);
  };

  console.log(props.item);
  return (
    <div class="card cardBien">
      <Modal
        isOpen={modalIsOpen}
        style={{ overlay: { backgroundColor: "gray" } }}
      >
        <div className="fixed-action-btn">
          <a  
            onClick={closeModal}
            class="btn-floating btn-large waves-effect waves-light red"
          >
            <i class="material-icons">close</i>
          </a>
        </div>
        <div className="itemDetails">
          <h4>Détails du bien</h4>
          <div className="statusBtns">
           
          </div>
          <p>{itemInfo?.name}</p>
          <Carousel {...props}/>   

          
         
          <p>
           {/*  <b>ID</b> {item?._id} */}
          </p>
          <p>
            <b>Adresse:</b> {itemInfo?.adress}
          </p>
          <p>
            <b>Code postal:</b> {itemInfo?.postalCode}
          </p>
          <p>
            <b>Ville:</b> {itemInfo?.city}
          </p>
          <p>
            <b>Description:</b> {itemInfo?.prettyPrint}
          </p>{" "}
          {/* CHANGED DESCRIPTION INTO PRETTYPRINT  */}
          <p>
            <b>Type de bien:</b> {itemInfo?.typeOfItem}
          </p>
          <p>
            <b>Surface habitable:</b> {itemInfo?.livingArea} m²
          </p>
          <p>
            <b>Nombre de pièces: {itemInfo?.rooms}</b>
          </p>
          <p>
            <b>Nombre de chambres:</b> {itemInfo?.bedrooms}
          </p>
          <p>
            <b>Superficie du terrain:</b> {itemInfo?.terraceSurface} m²
          </p>
          <p>
            <b>Garage:</b> {itemInfo?.garage ? "oui" : "non"} - <b>Quantité:</b>{" "}
            {itemInfo?.garageNumber}
          </p>
          <p>
            <b>Parking:</b> {itemInfo?.parking ? "oui" : "non"} -{" "}
            <b>Quantité:</b> {itemInfo?.parkingNumber}
          </p>
          <p>
            <b>Piscine:</b> {itemInfo?.swimmingPool ? "oui" : "non"}
          </p>
          <p>
            {itemInfo?.otherSpecialPerks === true ? <div><b>Autres:</b> {itemInfo?.otherSpecialPerks} </div> : <p></p> }
            </p>
         {/*  <p>
            <b>Nombre de token encore disponibles: </b>{" "}
            {itemInfoFinance?.remainingAvailableToken}
          </p>
          <p>
            <b>Nombre total inital de token pour ce bien: </b>{" "}
            {itemInfoFinance?.initialTokenAmount}
          </p>
          <p>
            <b>Valeur initiale d'un token pour ce bien: </b>{" "}
            {itemInfoFinance?.initialSingleTokenValueInEuros}  UDS Coins
          </p> */}
          <p>
            <b>Valeur du bien: </b>{" "}
            {itemInfoFinance?.priceInEuros} Euros
          </p>
         {/*  {item?.itemPrivateData?.tokenData?.tokenBuyOrdersDuringFunding.map(
            (transaction, id) => (
              <div key={id}>
                Id Utilisateur {transaction.itemId} {transaction.quantity}
              </div>
            )
          )} */}
        {/*   <form>
            <label for="tokens">
              Nombre de tokens que vous souhaiter acheter:{" "}
              <input
                type="number"
                onChange={handleNumberOfTokens}
                class="with-gap"
                name="buytokens"
              />
            </label> */}
            <a   onClick={achat}>Acheter</a>
          {/* </form> */}
          {/*   IL Y A DES NOUVELLES CLES EN PLUS SI TU VEUX LES AFFICHER.
                    GENRE isCurrentlyRented ou expectedYearlyIncome
                    Et toutes les clés qui concernent les tokens et les sousous qui sont
                   dans itemInfosFinance */}
        </div>
      </Modal>
      <div class="card-image waves-block waves-light">
        <img alt=""
          class="activator imgBien"
          
          src={`${Url}${props?.item?.itemPublicData?.itemPicturesFromUser[0]}`}
        />
      </div>
      <div class="card-contentHome">
        <span class="card-title activator grey-text text-darken-4">
          {props?.item?.itemPublicData?.description?.name}
        </span>
        <p>
          <a   onClick={openModal} className="rouge">
            Voir le bien
          </a>
        </p>
      </div>

      <div class="cacher card-reveal">
        <span class="card-title grey-text text-darken-4">
          {props?.item?.itemPublicData?.description?.name}
        </span>
        <i class="material-icons right">close</i>
        <p>{itemInfo?.prettyPrint}</p>
      </div>
    </div>
  );
}

export default CardBiens;
