import Biens from "./Biens";
import Informations from "./Informations";
import Portefeuille from "./Portefeuille";
import "./Profile.css";

function Profile() {

    return (
        <div>
            <h1>Page de profil</h1>
            <Informations/>
            <Portefeuille />
            <Biens />
            
        </div>
    );
}

export default Profile;