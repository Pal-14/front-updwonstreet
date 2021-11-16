import React, { useState } from 'react';
import Modal from 'react-modal';
import './ItemModal.css';
import Service from '../../services';



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
    Le bien suivant est un/une ${itemInfo?.typeOfItem} d'une surface habitable de ${itemInfo?.livingArea} m2 \.
    Le prix de mise en vente est de ${itemInfoFinance?.priceInEuros} Stable Coins.\
    Le bien est divisé en ${itemInfoFinance?.initialTokenAmount} tokens.\
    Chaque token a une valeur initiale de ${itemInfoFinance?.initialSingleTokenValueInEuros}. \
    ${!itemInfoFinance?.fundingOfItemIsInProgress ? "Le bien n'est pas en cours de financement participatif" :
            "le bien est en cours de financement participatif"}\
    Sur ce bien vous disposez de ${itemPicturesFromUser.length} photo(s) pour constituer l'annonce.
    `
    console.log("ITEM:", item);

    let Url = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-public-pic/` // URL de récupération des photos
    let UrlPrivatePic = `https://scrumbag-back-updownstreet.osc-fr1.scalingo.io/get-private-pic/` // URL de récupération des documents privés soumis par un utilisateur

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
        }
        let change = await Service.editItemByAdmin(body);
        if (change.data.success) {
            setIsOpen(false)
        }
        console.log("Change:", change);
    };


    /* Affichage front */
    return (
        <li>
            <div className="itemSummary">
                <p>{itemInfo?.name}</p>
                <p>{itemInfo?.adress} - {itemInfo?.city}</p>
                <a onClick={openModal}>Voir détails</a>
            </div>
            <Modal isOpen={modalIsOpen} style={{ overlay: { backgroundColor: 'gray' } }}>
                <div className="fixed-action-btn">
                    <a onClick={closeModal} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">Fermer</i></a>
                </div>
                <div className="itemDetails">
                    <h4>Détails du bien</h4>
                    <div className="statusBtns">
                        {!isPublic ? <a onClick={() => editValueOfItem("itemPrivateData.status.isPublic", true)}> Passer en statut "Public" </a> :
                            <a onClick={() => editValueOfItem("itemPrivateData.status.isPublic", false)}> Passer en statut "Privé" </a>
                        }
                    </div>
                    <div className="itemDescription">
                        <p> Le bien </p>
                        <p><b>ID</b> {item?._id}</p>
                        <p><b>Adresse:</b> {itemInfo?.adress}</p>
                        <p><b>Code postal:</b> {itemInfo?.postalCode}</p>
                        <p><b>Ville:</b> {itemInfo?.city}</p>
                        <p><b>Description:</b> {itemInfo?.prettyPrint}</p> {/* CHANGED DESCRIPTION INTO PRETTYPRINT  */}
                        <p><b>Type de bien:</b> {itemInfo?.typeOfItem}</p>
                        <p><b>Surface habitable:</b> {itemInfo?.livingArea} m²</p>
                        <p><b>Nombre de pièces: {itemInfo?.rooms}</b></p>
                        <p><b>Nombre de chambres:</b> {itemInfo?.bedrooms}</p>
                        <p><b>Superficie du terrain:</b> {itemInfo?.terraceSurface} m²</p>
                        <p><b>Garage:</b> {itemInfo?.garage ? "oui" : "non"} - <b>Quantité:</b> {itemInfo?.garageNumber}</p>
                        <p><b>Parking:</b> {itemInfo?.parking ? "oui" : "non"} - <b>Quantité:</b> {itemInfo?.parkingNumber}</p>
                        <p><b>Piscine:</b> {itemInfo?.swimmingPool ? "oui" : "non"}</p>
                        <p><b>Autres:</b> {itemInfo?.otherSpecialPerks}</p>

                        <p><b>PrettyPrint</b> {prettyPrint}</p>
                        <p><b>Nombre de token encore disponibles</b> {itemInfoFinance?.remainingAvailableToken}</p>
                        <p><b>Nombre total inital de token pour ce bien</b> {itemInfoFinance?.initialTokenAmount}</p>
                        <p><b>Valeur initiale d'un token pour ce bien </b> {itemInfoFinance?.initialTokenAmount}</p>

                        {tokenData?.tokenBuyOrdersDuringFunding.map((transaction, id) => (
                            <div key={id}>
                                Id Utilisateur {transaction.itemId} {transaction.quantity}</div>
                        ))}
                        {/*   IL Y A DES NOUVELLES CLES EN PLUS SI TU VEUX LES AFFICHER.
                        GENRE isCurrentlyRented ou expectedYearlyIncome
                        Et toutes les clés qui concernent les tokens et les sousous qui sont dans itemInfosFinance */}
                    </div>
                </div>
                <div className="photoGallery">
                    {/* JE T'AI FOUTU UN PETIT MAP POUR LES PHOTOS HISTOIRE DE MOINS TE FAIRE SUER MA POULE  */}
                    {itemPicturesFromUser.map((picture, id) => (
                        <img src={`${Url}${picture}`} key={id} alt="" />
                    ))}

                    {/* DU COUP TU POURRAS ENLEVER EN DESSOUS SAUF SI TU VEUX CONTROLLER PRECISEMENT CHAQUE PHOTO. UP TO YOU  */}
                    {/* {itemPicturesFromUser.length >0  ? <img src={`${Url}${itemPicturesFromUser[0]}`}  /> : <p></p>}
                    {itemPicturesFromUser.length >1  ?  <img src={`${Url}${itemPicturesFromUser[1]}`}  /> : <p></p>}
                    {itemPicturesFromUser.length >2  ?  <img src={`${Url}${itemPicturesFromUser[2]}`}  /> : <p></p>}
                    {itemPicturesFromUser.length >3  ?  <img src={`${Url}${itemPicturesFromUser[3]}`}  /> : <p></p>} */}
                </div>
            </Modal>
        </li>
    );
}

export default ItemModal;