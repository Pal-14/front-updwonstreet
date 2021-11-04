import { useState, useEffect } from "react";
import "./Admin.css";
import Service from "../../services";


function Admin() {

    /* Déclaration variable d'état - Liste d'utilisateurs */
    const [userList, setUserList] = useState([]);

    /* Récupération de tous les utilisateurs */
    useEffect(() => {
        Service.adminUserList().then((response) => {
            setUserList(response.data);
        });
    }, []);
    console.log(userList);

    /* Fonction d'affichage d'un utilisateur */
    const renderUsers = () => {
        return userList.map((user, id) => {
            return (
                <div key={id} className="userIdentity">
                    <p>{user.firstName} {user.lastName}</p>
                </div>
            );
        });
    };

    /* Affichage front */
    return (
        <div className="generalContainer">
            <h2>Liste des utilisateurs</h2>
            <div className="userList">{renderUsers()}</div>
        </div>
    );
}

export default Admin;