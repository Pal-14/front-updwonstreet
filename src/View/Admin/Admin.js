import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";
import UserModal from './UserModal';


function Admin() {


    /* Variables d'état */

    const [userList, setUserList] = useState([]);
    const [showPendingApproval, setShowPendingApproval] = useState(false);
    const [searchInput, setSearchInput] = useState("");


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
                <label for="checkbox">
                    <input type="checkbox" id="checkbox" onChange={toggleShowPendingApproval} checked={showPendingApproval} />
                    <span>En attente de validation</span>
                </label>
            </div>
            <ul className="collection">
                {renderUsers()}
            </ul>
        </div>
    );
}

export default Admin;