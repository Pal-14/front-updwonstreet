import React, { useEffect, useState } from 'react';
import Service from '../../services';
import './ReviewItems.css';
import Modal from "react-modal";
import ItemModal from './ItemModal';


function ReviewItems() {

    /* Variables d'état */
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [showNotPublic, setShowNotPublic] = useState(false);

    /* Récupération des biens immobiliers */
    useEffect(() => {
        Service.adminItemList().then((response) => {
            setItemList(response.data);
        });
    }, []);
    console.log("Item list:", itemList);

    /* Événements */

    /* Fonctions de filtre */

    /* Affichage des biens */
    const renderItems = () => {
        return itemList.map((item, id) => {
            return <ItemModal item={item} id={id} />;
        });
    };

    /* Ouverture/fermeture de modal */
    function openModal() {
        setModalIsOpen(true);
    };

    function closeModal() {
        setModalIsOpen(false);
    };

    /* Affichage front */
    return (
        <div class="card cardProfile">
            <div class="card-content">
                <span class="card-title ">Liste des biens</span>
                <p>Ici vous pouvez consulter les biens immobiliers proposés.</p>
                <p>
                    <a id="rouge" onClick={openModal}>
                        Ici pour consulter
                    </a>
                </p>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <a onClick={closeModal}>close</a>
                <div>
                    <label for="searchInput">
                        Rechercher par:
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Nom, prénom ou e-mail"
                            className="searchInput"
                        />
                    </label>
                </div>
                <div>
                    <label for="checkbox">
                        <input
                            type="checkbox"
                            id="checkbox"
                        />
                        <span>En attente de validation</span>
                    </label>
                </div>
                <ul className="collection">{renderItems()}</ul>
            </Modal>
        </div>
    );
}

export default ReviewItems;
