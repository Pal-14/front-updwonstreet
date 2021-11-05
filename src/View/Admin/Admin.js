import React from "react";
import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";
import UserModal from './UserModal';
import Modal from "react-modal";


function Admin() {

    /* Déclaration variables d'état - Liste d'utilisateurs */
    const [userList, setUserList] = useState([]); // Tous les utilisateurs
    const [filteredList, setFilteredList] = useState(userList); // Utilisateurs filtrés

    /* Événement de recherche */
    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        console.log("Value:", value);
        result = userList.filter((data) => {
            return (data.lastName.toLowerCase().search(value) != -1 || data.firstName.toLowerCase().search(value) != -1);
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
            <input type="text" placeholder="Rechercher" onChange={handleSearch} />
            <div className="userList">{renderUsers()}</div>
        </div>
    );
}

export default Admin;