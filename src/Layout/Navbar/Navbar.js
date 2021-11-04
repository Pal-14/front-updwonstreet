import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {

    /* Récupération du statut de connexion */
    let isLoggedIn = props.isLoggedIn;

    /* Fonction d'affichage conditionnel des boutons de navigation */
    const displayButtons = () => {
        if(isLoggedIn === true) {
            return (
                <div>
                    <Link to="/profile">Gérer mon profil</Link>
                    <Link to="/catalog">Biens disponibles</Link>
                    <Link to="/log">Déconnexion</Link>
                </div>
            );
        } else {
            return (
                <div>
                  <Link to="/log">Connexion</Link>
                  <Link to="/admin">Admin</Link>
                </div>
            );
        }
    }

    /* Affichage front */
    return (
        <div className="navbarContainer">
            <div className="companyName">
                <Link to="/">Updownstreet</Link>
            </div>
            <div className="navbarLinks">{displayButtons()}</div>
        </div>
    );
}

export default Navbar;