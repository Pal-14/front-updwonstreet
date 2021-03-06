import React, { useState } from "react";
import Modal from "react-modal";
import "./ItemModal.css";
import Service from "../../services";

function ItemModal(props) {
  /* Variables d'état */
  const [modalIsOpen, setIsOpen] = useState(false);

  /* Variables */
  let item = props?.item;
  let itemInfo = item?.itemPublicData?.description;
  let itemInfoFinance = item?.itemPublicData?.funding;
  let itemPicturesFromUser = item?.itemPublicData?.itemPicturesFromUser;
  let isPublic = item?.itemPrivateData?.status?.isPublic;
  let tokenData = item?.itemPrivateData?.tokenData;

  let prettyPrint = `
    Le bien suivant est un/une ${
      itemInfo?.typeOfItem
    } d'une surface habitable de ${itemInfo?.livingArea} m2 \.
    Le prix de mise en vente est de ${
      itemInfoFinance?.priceInEuros
    }
    `
  console.log("ITEM:", item);

  let Url = `https://backimmo.osc-fr1.scalingo.io/get-public-pic/`; // URL de récupération des photos
  /* let UrlPrivatePic = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-private-pic/` */ // URL de récupération des documents privés soumis par un utilisateur

  /* Ouverture modal */
  const openModal = () => {
    setIsOpen(true);
  };

  /* Fermeture modal */
  const closeModal = () => {
    setIsOpen(false);
  };

  /* Modification du bien */
  const editValueOfItem = async (key, value) => {
    let body = {
      targetItemId: item._id,
      keyOfPropertyToChange: key,
      newValue: value,
    };
    let change = await Service.editItemByAdmin(body);
    if (change.data.success) {
      props.setReset(false);
      setIsOpen(false);
    }
    console.log("Change:", change);
  };

  /* Affichage front */
  return (
    <li>
      <div className="itemSummary">
        <p>{itemInfo?.name}</p>
        <p>
          {itemInfo?.adress} - {itemInfo?.city}
        </p>
        <a onClick={openModal}>Voir détails</a>
      </div>
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
            {!isPublic ? (
              <a
                onClick={() =>
                  editValueOfItem("itemPrivateData.status.isPublic", true)
                }
              >
                {" "}
                Passer en statut "Public"{" "}
              </a>
            ) : (
              <a
                onClick={() =>
                  editValueOfItem("itemPrivateData.status.isPublic", false)
                }
              >
                {" "}
                Passer en statut "Privé"{" "}
              </a>
            )}
          </div>
          <div className="itemDescription">
            <p> Le bien </p>
            <p>
              <b>ID</b> {item?._id}
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
              <b>Garage:</b> {itemInfo?.garage ? "oui" : "non"} -{" "}
              <b>Quantité:</b> {itemInfo?.garageNumber}
            </p>
            <p>
              <b>Parking:</b> {itemInfo?.parking ? "oui" : "non"} -{" "}
              <b>Quantité:</b> {itemInfo?.parkingNumber}
            </p>
            <p>
              <b>Piscine:</b> {itemInfo?.swimmingPool ? "oui" : "non"}
            </p>
            <p>
              <b>Autres:</b> {itemInfo?.otherSpecialPerks}
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
              {itemInfoFinance?.initialSingleTokenValueInEuros} UDS Coins
            </p> */}
            <p>
              <b>Valeur du bien: </b> {itemInfoFinance?.priceInEuros} Euros
            </p>
           {/*  {tokenData?.tokenBuyOrdersDuringFunding.map((transaction, id) => (
              <div key={id}>
                Id Utilisateur {transaction.itemId} {transaction.quantity}
              </div>
            ))} */}
            {/*   Possibilité d'afficher de nouvelles clés (isCurrentlyRented / expectedYearlyIncome ) et toutes les clés qui concernent les tokens et les sommes qui sont dans itemInfosFinance */}
          </div>
        </div>
        <div className="photoGallery">
          {itemPicturesFromUser.map((picture, id) => (
            <img src={`${Url}${picture}`} key={id} alt="" />
          ))}
        </div>
      </Modal>
    </li>
  );
}

export default ItemModal;
