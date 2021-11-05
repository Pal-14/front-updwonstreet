import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

function UserModal(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <p>{props.user.firstName} {props.user.lastName}</p>
            <button onClick={openModal}>Voir profil</button>
            <Modal isOpen={modalIsOpen}>
                <div className="closeButton">
                    <button onClick={closeModal}>&times;</button>
                </div>
                <div>
                    <h2>Informations Personnelles : </h2>
                    <div><p>Prénom: {props.user.firstName}</p></div>
                    <div><p>Nom de Famille: {props.user.lastName}</p></div>
                    <div><p>Date de Naissance: {props.user.dateOfBirth}</p></div>
                    <div><p>adresse: {props.user.adresse}</p></div>
                    <div><p>Ville: {props.user.ville}</p></div>
                    <div><p>Code Postal: {props.user.codePostal}</p></div>
                    <div><p>Email: {props.user.email} </p></div>
                    <div><p>Téléphone: {props.user.telephone}</p></div>
                </div>
            </Modal>
        </div>
    );
}

export default UserModal;
