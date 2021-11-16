import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";
import Modal from "react-modal";
import UserModal from "./UserModal";


function Admin() {

  /* Variables d'état */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userList, setUserList] = useState([]);
  const [showPendingApproval, setShowPendingApproval] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [reactualisation, setReactualisation] = useState(false);

  /* Récupération des utilisateurs */
  useEffect(() => {
    Service.adminUserList().then((response) => {
      setUserList(response.data);
      setReactualisation(true);
    });
  }, [reactualisation]);
  console.log("User list:", userList);

  /* Événements */
  const toggleShowPendingApproval = () => {
    setShowPendingApproval(!showPendingApproval);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  /* Fonctions de filtre */
  const checkboxFilterUsers = (userList) => {
    return showPendingApproval
      ? userList.filter((user) => !user.infos.isVerifiedByAdmin)
      : userList
  };

  const searchbarFilterUsers = () => {
    return userList.filter(
      (user) =>
        user.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.email.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  /* Fonction d'affichage des utilisateurs */
  const renderUsers = () => {
    let searchbarFilteredUsers = searchbarFilterUsers();
    let searchbarCheckboxFilteredUsers = checkboxFilterUsers(
      searchbarFilteredUsers
    );
    return searchbarCheckboxFilteredUsers.map((user, id) => {
      return <UserModal user={user} id={id} setReset={setReactualisation} />;
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
        <span class="card-title ">Utilisateurs inscrits </span>
        <p>Ici vous pouvez consulter la liste les utilisateurs inscrits.</p>
        <p>
          <a id="rouge" onClick={openModal}>
            Ici pour consulter
          </a>
        </p>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <a onClick={closeModal}>Fermer</a>
        <div>
          <label for="searchInput">
            Rechercher par:
            <input
              type="text"
              id="searchInput"
              placeholder="Nom, prénom ou e-mail"
              className="searchInput"
              onChange={handleSearchInput}
            />
          </label>
        </div>
        <div>
          <label for="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={toggleShowPendingApproval}
              checked={showPendingApproval}
            />
            <span>En attente de vérification</span>
          </label>
        </div>
        <ul className="collection">{renderUsers()}</ul>
      </Modal>
    </div>
  );
}

export default Admin;
