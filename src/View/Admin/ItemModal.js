import React, { useState } from 'react';
import Modal from 'react-modal';
import './ItemModal.css';


function ItemModal(props) {

    /* Variables d'état */
    const [modalIsOpen, setIsOpen] = useState(false);

    /* Variables */
    let item = props?.item;
    let itemInfo = props?.item?.itemInfos;

    console.log("ITEM:", item);

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
                <p>{itemInfo.name}</p>
                <p>{itemInfo.adress} - {itemInfo.city}</p>
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
                    <p><b>Description:</b> {itemInfo?.description}</p>
                    <p><b>Type de bien:</b> {itemInfo?.typeOfItem}</p>
                    <p><b>Surface habitable:</b> {itemInfo?.livingArea} m²</p>
                    <p><b>Nombre de pièces: {itemInfo?.rooms}</b></p>
                    <p><b>Nombre de chambres:</b> {itemInfo?.bedrooms}</p>
                    <p><b>Superficie du terrain:</b> {itemInfo?.terraceSurface}</p>
                    <p><b>Garage:</b> {itemInfo.garage ? "oui" : "non"} - <b>Quantité:</b> {itemInfo?.garageNumber}</p>
                    <p><b>Parking:</b> {itemInfo.parking ? "oui" : "non"} - <b>Quantité:</b> {itemInfo?.parkingNumber}</p>
                    <p><b>Piscine:</b> {itemInfo.swimmingPool ? "oui" : "non"}</p>
                    <p><b>Autres:</b> {itemInfo.otherSpecialPerks}</p>
                </div>
                <div className="photoGallery">
                    <p>Afficher les photos ici</p>
                </div>
            </Modal>
        </li>
    );
}

export default ItemModal;