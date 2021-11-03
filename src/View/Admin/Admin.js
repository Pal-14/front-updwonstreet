import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";

function Admin() {

    /* Déclaration variable d'état - Liste d'utilisateurs */
    const [userList, setUserList] = useState([]);

    /* Fonction pour récupérer tous les utilisateurs */
    Service.adminUserList()
    .then((response) => {
        return response.json();
    })
    .then(
        (responseObject) => {
            setUserList(responseObject);
        },
        (error) => {
            console.log(error);
        }
    );

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
        </div>
    );
}

export default Admin;