import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {

    /* Déclaration des variables d'état */
    const [logButton, setLogButton] = useState("");

    /* Récupération du statut de connexion */
    let isLoggedIn = props.isLoggedIn;

    /* Affichage conditionnel des boutons de navigation */
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
                </div>
            );
        }
    }

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