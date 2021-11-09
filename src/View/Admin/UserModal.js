import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import './UserModal.css';
import Service from '../../services';


function UserModal(props) {

    /* Variables d'état */
    const [modalIsOpen, setIsOpen] = useState(false);

    /* Variable pour simplifier l'écriture de props */
    let user = props?.user;
    let userInfo = props?.user?.infos;

    /* Ouverture modal */
    const openModal = () => {
        setIsOpen(true);
    };

    /* Fermeture modal */
    const closeModal = () => {
        setIsOpen(false);
    };

    /* Modification de compte */
    const editStatus = async (user, key, value) => {
        let body = {
            targetUserId:user._id,
            keyOfPropertyToChange:key,
            targetValue: value,
        }
        let change = await Service.editUserStatus(body);
        console.log(change);
    };

    /* Affichage front */
    return (
        <li className="collection-item">
            <div className="userSummary">
                <p>{user.firstName} {user.lastName}</p>
                <p>Adresse e-mail: {user.email}</p>
                <a onClick={openModal}>Voir profil</a>
            </div>
            <Modal isOpen={modalIsOpen} style={{overlay:{backgroundColor: 'gray'}}}>
                <div className="closeBtn">
                    <a onClick={closeModal}>&times;</a>
                </div>
                <div className="personalInfo">
                    <h2>Informations personnelles</h2>
                    <div><p>Prénom: {user?.firstName}</p></div>
                    <div><p>Nom de famille: {user?.lastName}</p></div>
                    <div><p>Date de naissance: {userInfo?.dateOfBirth}</p></div>
                    <div><p>Adresse: {userInfo?.adress}</p></div>
                    <div><p>Ville: {userInfo?.city}</p></div>
                    <div><p>Code Postal: {userInfo?.postalCode}</p></div>
                    <div><p>Email: {user?.email} </p></div>
                    <div><p>Téléphone: {userInfo?.phoneNumber}</p></div>
                </div>
                <div className="wallet">
                    <h2>Informations du portefeuille</h2>
                    <p>Stable coins possédés: {user?.stableCoin}</p>
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
                {!userInfo?.isVerifiedByAdmin ? <a onClick={editStatus(user, "isVerified", true)}>Valider le compte</a> : <></>}
                {!userInfo?.isAdmin ? <a onClick={editStatus(user, "isAdmin", true)}>Passer en administrateur</a> : <></>}
            </Modal>
        </li>
    );
}

export default UserModal;
