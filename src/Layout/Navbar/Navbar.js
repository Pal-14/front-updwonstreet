import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  /* Récupération du statut de connexion */
  let isLoggedIn = props.isLoggedIn;

  /* Fonction d'affichage conditionnel des boutons de navigation */
  const displayButtons = () => {
    if (isLoggedIn === true) {
      return (
        <div>
          <Link className="Link" to="/profile">
            Gérer mon profil
          </Link>
          <Link className="Link" to="/catalog">
            Biens disponibles
          </Link>
          <Link className="Link" to="/log">
            Déconnexion
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="Link" to="/log">
            Connexion
          </Link>
          <Link className="Link" to="/admin">
            Admin
          </Link>
        </div>
      );
    }
  };

  /* Affichage front */
  return (
    <div className="navbarContainer">
      <nav className="bleuB">
        <Link to="/" className="brand-logo Link">
          <div className="uplogo"></div>
        </Link>
        <div class="right hide-on-med-and-down">{displayButtons()}</div>
      </nav>
    </div>
  );
}

export default Navbar;
