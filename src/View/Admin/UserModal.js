import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import './UserModal.css';


function UserModal(props) {

    /* Variable d'état */
    const [modalIsOpen, setIsOpen] = useState(false);

    /* Variable pour simplifier l'écriture de props */
    let user = props?.user;

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
        <div>
            <div className="userSummary">
                <h4>{user.firstName} {user.lastName}</h4>
                <p>Adresse e-mail: {user.email}</p>
                <button onClick={openModal}>Voir profil</button>
            </div>
            <Modal isOpen={modalIsOpen} style={{overlay:{backgroundColor: 'gray'}}}>
                <div className="closeButton">
                    <button onClick={closeModal}>&times;</button>
                </div>
                <div className="personalInfo">
                    <h2>Informations personnelles</h2>
                    <div><p>Prénom: {user?.firstName}</p></div>
                    <div><p>Nom de famille: {user?.lastName}</p></div>
                    <div><p>Date de naissance: {user?.dateOfBirth}</p></div>
                    <div><p>Adresse: {user?.adresse}</p></div>
                    <div><p>Ville: {user?.ville}</p></div>
                    <div><p>Code Postal: {user?.codePostal}</p></div>
                    <div><p>Email: {user?.email} </p></div>
                    <div><p>Téléphone: {user?.telephone}</p></div>
                </div>
                <div className="wallet">
                    <h2>Informations du portefeuille</h2>
                    <p>Stable coins possédés: {user?.stableCoins}</p>
                    <p>Valeur totale des stable coins:</p>
                </div>
                <div className="idDocuments">
                    <h2>Mes pièces justificatives</h2>
                    <div>
                        <p>Carte d'identité</p>
                    </div>
                    <div>
                        <p>RIB</p>
                    </div>
                    <div>
                        <p>Justificatifs de domicile</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default UserModal;
