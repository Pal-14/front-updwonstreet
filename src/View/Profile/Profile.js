import Biens from "./Biens";
import Informations from "./Informations";
import Portefeuille from "./Portefeuille";
import "./Profile.css";
import Finalisation from "./Finalisation";
import { useState } from "react";
import Edition from "./Edition";
import Docs from "./Docs";



function Profile(props) {
    
  const [title, setTitle] = useState ("Validé")
  const [error, setError] = useState ("")
  

 function Isaccepted () {
   if(title === "Validé" ) {
     setTitle("Validé")
   }
   else {
     if(title !== "Validé"){
       setTitle("En attente d'admin")
     }
   }
 }
 // variable pour : changer l'etat de User a compte validé et envoi des composants si validé 
// pour avoir les composants validé  dans let test = "Validé laisser tel quel
// et pour avoir le status non validé dans let test retiré juste le (é).

let test = "Valid"

  return (
    <div>
      <h1>Page de profil</h1>
      <h3>{error} </h3>
      <h3>{title} (plus tard mettre Compte confirmé ou certifié)</h3> 
     {test ==="Validé" ? <div> <Informations {...props}/> <Portefeuille  {...props}/><Biens {...props} /><Edition {...props} />  </div>: <div><Finalisation {...props} />  <Docs {...props} /></div> }

     
      
    </div>
  );
}

export default Profile;
