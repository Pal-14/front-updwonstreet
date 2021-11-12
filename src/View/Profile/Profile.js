import Biens from "./Biens";
import Informations from "./Informations";
import Portefeuille from "./Portefeuille";
import "./Profile.css";
import Finalisation from "./Finalisation";
import { useState } from "react";
import Edition from "./Edition";
import Docs from "./Docs";
import AjoutDeBiens from "./AjoutDeBiens";

function Profile(props) {
  const [title, setTitle] = useState("Validé");
  const [error, setError] = useState("");

  function Isaccepted() {
    if (title === "Validé") {
      setTitle("Validé");
    } else {
      if (title !== "Validé") {
        setTitle("En attente d'admin");
      }
    }
  }
  // variable pour : changer l'etat de User a compte validé et envoi des composants si validé
  // pour avoir les composants validé  dans let test = "Validé laisser tel quel
  // et pour avoir le status non validé dans let test retiré juste le (é).

  const siValide = () => {
    return (
      <div className="cardInCard">
        <Informations {...props} />
        <Portefeuille {...props} />
        <Biens {...props} />
        <Edition {...props} />  
        <AjoutDeBiens {...props}/>
      </div>
    );
  };

  let test = "Validé";

  return (
    <div className="containCard">
      <div className="containProfile">
        <div className="boxProfile">
          <div className="imageProfile" />
        </div>
      </div>
      <div className="card Profile">
        <span class="card-title">Page de profil</span>
        <p>Statut de votre profil : {title}</p>
        <p>{error}</p>
        {test === "Validé" ? (
          siValide()
        ) : (
          <div class="card-action">
            <Docs {...props}/> <Finalisation {...props}/> 
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
