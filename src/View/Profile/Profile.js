import Biens from "./Biens";
import Informations from "./Informations";
import Portefeuille from "./Portefeuille";
import "./Profile.css";
import Finalisation from "./Finalisation";

function Profile() {

    return (
        <div>
            <h1>Page de profil</h1>
            <Finalisation />
            <Informations/>
            <Portefeuille />
            <Biens />
            
        </div>
    );
}

export default Profile;