import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";
import Modal from "react-modal";
import ItemModal from "./ItemModal";


function Admin() {

  /* Variables d'état */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [showNotPublic, setShowNotPublic] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  /* Récupération des utilisateurs */
  useEffect(() => {
    Service.adminItemList().then((response) => {
      setItemList(response.data);
    });
  }, []);
  console.log("Item list:", itemList);

  /* Événements */
  const toggleShowNotPublic = () => {
    setShowNotPublic(!showNotPublic);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  /* Fonctions de filtre */
  const checkboxFilterItems = (itemList) => {
    return showNotPublic
      ? itemList.filter((item) => !item.itemPrivateData.status.isPublic)
      : itemList
  };

  const searchbarFilterItems = () => {
    return itemList.filter(
      (item) =>
        item?.itemPublicData?.description?.city.toLowerCase().includes(searchInput.toLowerCase()) ||
        item?.itemPublicData?.description?.typeOfItem.toLowerCase().includes(searchInput.toLowerCase()) ||
        item?.itemPublicData?.description?.prettyPrint.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  /* Fonction d'affichage des utilisateurs */
  const renderItems = () => {
    let searchbarFilteredItems = searchbarFilterItems();
    let searchbarCheckboxFilteredItems = checkboxFilterItems(
      searchbarFilteredItems
    );
    return searchbarCheckboxFilteredItems.map((item, id) => {
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
        <span class="card-title ">Biens existants</span>
        <p>Ici vous pouvez consulter les biens existants.</p>
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
              placeholder="Type de bien, Ville ou mot dans la description"
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
              onChange={toggleShowNotPublic}
              checked={showNotPublic}
            />
            <span>Afficher uniquement les biens non publiés</span>
          </label>
        </div>
        <ul className="collection">{renderItems()}</ul>
      </Modal>
    </div>
  );
}

export default Admin;
