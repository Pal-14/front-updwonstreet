import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";
import UserModal from './UserModal';


function Admin() {

    /* Variables d'état */
    /* const [userList, setUserList] = useState([]); // Tous les utilisateurs
    const [filteredList, setFilteredList] = useState(userList); // Utilisateurs filtrés en fonction du nom, prénom ou adresse e-mail */

    /* Variables d'état */

    const [userList, setUserList] = useState([]);
    const [showPendingApproval, setShowPendingApproval] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    /* Recherche filtrée */
    /* const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        console.log("Value:", value);
        result = userList.filter((data) => {
            return (data.lastName.toLowerCase().search(value) !== -1 || data.firstName.toLowerCase().search(value) !== -1 || data.email.toLowerCase().search(value) !== -1);
        });
        setFilteredList(result);
    }; */

    /* Récupération des utilisateurs */

    useEffect(() => {
        Service.adminUserList().then((response) => {
            setUserList(response.data);
        });
    }, []);
    console.log("User list:", userList);


    /* Événements */

    const toggleShowPendingApproval = () => {
        setShowPendingApproval(!showPendingApproval);
    };

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => { }, [searchInput]);


    /* Fonctions de filtre */

    const checkboxFilterUsers = (userList) => {
        return showPendingApproval
            ? userList.filter(user => !user.infos.isVerifiedByAdmin)
            : userList
    };

    const searchbarFilterUsers = () => {
        return userList.filter(user => user.lastName.toLowerCase().includes(searchInput.toLowerCase()) || user.firstName.toLowerCase().includes(searchInput.toLowerCase()) || user.email.toLowerCase().includes(searchInput.toLowerCase()));
    };


    /* Fonction d'affichage des utilisateurs */

    const renderUsers = () => {
        let searchbarFilteredUsers = searchbarFilterUsers();
        let searchbarCheckboxFilteredUsers = checkboxFilterUsers(searchbarFilteredUsers);
        return searchbarCheckboxFilteredUsers.map((user, id) => {
            return (
                <UserModal user={user} id={id} />
            );
        });
    };


    /* Affichage front */

    return (
        <div className="generalContainer">
            <h3>Utilisateurs inscrits</h3>
            <div>
                <label for="searchInput">Rechercher par:
                    <input type="text" id="searchInput" placeholder="Nom, prénom ou e-mail" className="searchInput" onChange={handleSearchInput} />
                </label>
            </div>
            <div>
                <label for="checkbox">En attente de validation:
                    <input type="checkbox" className="filled-in" id="checkbox" onChange={toggleShowPendingApproval} checked={showPendingApproval} />
                </label>
            </div>
            <ul className="collection">
                {renderUsers()}
            </ul>
        </div>
    );
}

export default Admin;