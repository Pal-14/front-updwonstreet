import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar(props) {
  
  /* Récupération du statut de connexion */
  let isLoggedIn = props.isLoggedIn;
  let isAdmin = props?.user?.data?.data?.infos?.isAdmin;

  console.log("Is admin:", isAdmin);

  /* Fonction d'affichage conditionnel des boutons de navigation */
  const displayButtons = () => {
    if ((isLoggedIn === true) && (isAdmin === false)) {
      return (
        <ul id="nav-mobile" class="right">
          <li>
            <Link className="Link" to="/profile">
              Gérer mon profil
            </Link>
          </li>
          <li>
            <Link className="Link" to="/catalog">
              Biens disponibles
            </Link>
          </li>
          <li>
            <Link className="Link" to="/log">
              Déconnexion
            </Link>
          </li>
          
          <li>
            {`Connecté en tant que  ${props?.user?.data?.data?.firstName} ${props?.user?.data?.data?.lastName}//=>`}   {/* A PRENDRE OU A LAISSER C'eST VOUS QUI VOYEZ */}
          </li>
          <li>
            {`  Solde :  ${props?.user?.data?.data?.stableCoin} € :`}
          </li>
        </ul>
      );
    }
    else if ((isLoggedIn === true) && (isAdmin === true)) {
      return (
        <ul id="nav-mobile" class="right">
          <li>
            <Link className="Link" to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link className="Link" to="/log">
              Déconnexion
            </Link>
          </li>
          <li>
          {`Connecté en tant que ${props?.user?.data?.data?.firstName} ${props?.user?.data?.data?.lastName}`}   {/* A PRENDRE OU A LAISSER C'eST VOUS QUI VOYEZ */}
          </li>
        </ul>
      );
    }
    else {
      return (
        <ul id="nav-mobile" class="right">
          <li>
            <Link className="Link" to="/log">
              Connexion
            </Link>
          </li>
        </ul>
      );
    }
  };

  /* Affichage front */
  return (
    <div className="navbarContainer">
      <nav className="bleuB">
        <div class="nav-wrapper">
          <Link to="/" className="logoNavBar Link">
            <div className="uplogo"></div>
          </Link>
          {displayButtons()}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
