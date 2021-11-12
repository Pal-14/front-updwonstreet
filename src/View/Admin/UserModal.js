import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import './UserModal.css';
import Service from '../../services';


function UserModal(props) {

    let Url = `http://localhost:5000/get-public-pic/`

    let image = props.user.documents.documentsUrl
    let taille = image.length


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
            targetUserId: user._id,
            keyOfPropertyToChange: key,
            targetValue: value,
        }
        let change = await Service.editUserStatus(body);
        if (change.data.success) {
            setIsOpen(false)
        }
        console.log("Change:", change);
    };


    /* Affichage front */
    return (
        <li className="collection-item">
            <div className="userSummary">
                <p>{user.firstName} {user.lastName}</p>
                <p>Adresse e-mail: {user.email}</p>
                <a onClick={openModal}>Voir profil</a>
            </div>
            <Modal isOpen={modalIsOpen} style={{ overlay: { backgroundColor: 'gray' } }}>
                <div className="fixed-action-btn">
                <a onClick={closeModal} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">close</i></a>
                </div>
                <div className="personalInfo">
                    <h4>Informations personnelles</h4>
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
                    <h4>Informations du portefeuille</h4>
                    <p>Stable coins possédés: {user?.stableCoin}</p>
                    <p>Valeur totale des stable coins:</p>
                </div>
                <div className="idDocuments">
                    <h4>Mes pièces justificatives</h4>
                    <div>
                        <p>Carte d'identité</p>
                        <img src={`${Url}${image[taille - 3]}`} />
                    </div>
                    <div>
                        <p>RIB</p>
                        <img src={`${Url}${image[taille - 2]}`} />
                    </div>
                    <div>
                        <p>Justificatifs de domicile</p>
                        <img src={`${Url}${image[taille - 1]}`} />
                    </div>
                </div>
                <div className="statusBtns">
                    {!userInfo?.isVerifiedByAdmin ? <a onClick={() => editStatus(user, "infos.isVerifiedByAdmin", true)}>Valider le compte</a> : <></>}
                    <br />
                    {!userInfo?.isAdmin ? <a onClick={() => editStatus(user, "infos.isAdmin", true)}>Accorder le statut d'administrateur</a> : <a onClick={() => editStatus(user, "infos.isAdmin", "false")}>Retirer le statut d'administrateur</a>}
                </div>
            </Modal>
        </li>
    );
}

export default UserModal;