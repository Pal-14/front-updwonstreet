import React, { useState } from 'react';
import Modal from 'react-modal';
import './ItemModal.css';


function ItemModal(props) {

    /* Variables d'état */
    const [modalIsOpen, setIsOpen] = useState(false);

    /* Variables */
    let item = props?.item;
    let itemInfo = item?.itemPublicData?.description;
    let itemInfoFinance = item?.itemPublicData?.funding;
    let itemPicturesFromUser = item?.itemPublicData?.itemPicturesFromUser;
    let isPublic = item?.itemPrivateData?.status?.isPublic;
    
    console.log("ITEM:", item);

    let Url = `http://localhost:5000/get-public-pic/` // URL de récupération des photos

    /* Ouverture modal */
    const openModal = () => {
        setIsOpen(true);
    };

    /* Fermeture modal */
    const closeModal = () => {
        setIsOpen(false);
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
                    <a onClick={closeModal} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">close</i></a>
                </div>
                <div className="itemDetails">
                    <h4>Détails du bien</h4>
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
                  {/*   IL Y A DES NOUVELLES CLES EN PLUS SI TU VEUX LES AFFICHER.
                     GENRE isCurrentlyRented ou expectedYearlyIncome
                     Et toutes les clés qui concernent les tokens et les sousous qui sont
                     dans itemInfosFinance */}
                </div>
                <div className="photoGallery">
                    {/* vérifier pourquoi il n'y à rien à l'index [0] */}
                    {/* ternaire si pas photo affiche rien */}
                    {item?.itemPublicData?.itemPicturesFromUser.length >1  ? <img src={`${Url}${item?.itemPublicData?.itemPicturesFromUser[1]}`}  /> : <p></p>}
                    {item?.itemPublicData?.itemPicturesFromUser.length >2  ?  <img src={`${Url}${item?.itemPublicData?.itemPicturesFromUser[2]}`}  /> : <p></p>}
                    {item?.itemPublicData?.itemPicturesFromUser.length >3  ?  <img src={`${Url}${item?.itemPublicData?.itemPicturesFromUser[3]}`}  /> : <p></p>}
                    {item?.itemPublicData?.itemPicturesFromUser.length >4  ?  <img src={`${Url}${item?.itemPublicData?.itemPicturesFromUser[4]}`}  /> : <p></p>}
                </div>
                <div className="statusBtn">
                     {!isPublic ? <a>Publier la proposition</a> : <a></a>}
                </div>
            </Modal>
        </li>
    );
}

export default ItemModal;