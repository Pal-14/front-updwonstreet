import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";
import UserModal from './UserModal';


function Admin() {

    /* Variables d'état */
    const [userList, setUserList] = useState([]); // Tous les utilisateurs
    const [filteredList, setFilteredList] = useState(userList); // Utilisateurs filtrés en fonction du nom, prénom ou adresse e-mail

    /* Recherche filtrée */
    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        console.log("Value:", value);
        result = userList.filter((data) => {
            return (data.lastName.toLowerCase().search(value) !== -1 || data.firstName.toLowerCase().search(value) !== -1 || data.email.toLowerCase().search(value) !== -1);
        });
        setFilteredList(result);
    };

    /* Récupération de tous les utilisateurs */
    useEffect(() => {
        Service.adminUserList().then((response) => {
            setUserList(response.data);
            setFilteredList(response.data);
        });
    }, []);
    console.log("User list:", userList);
    console.log("Filtered list:", filteredList);

    /* Fonction d'affichage des utilisateurs */
    const renderUsers = () => {
        return filteredList.map((user, id) => {
            return (
                <UserModal user={user} id={id} />
            );
        });
    };

    /* Affichage front */
    return (
        <div className="generalContainer">
            <h2>Liste des utilisateurs</h2>
            <div>
                <label for="searchInput">Rechercher un utilisateur:</label>
                <input type="text" placeholder="Nom, prénom ou e-mail" className="searchInput" onChange={handleSearch} />
            </div>
            <div className="userList">
                {renderUsers()}
            </div>
        </div>
    );
}

export default Admin;