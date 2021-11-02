import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbarContainer">
            <div className="companyName">
                <Link to="/">Updownstreet</Link>
            </div>
            <div className="navbarLinks">
                <Link to="/log"><button>Connexion / Inscription</button></Link>
            </div>
        </div>
    );
}

export default Navbar;