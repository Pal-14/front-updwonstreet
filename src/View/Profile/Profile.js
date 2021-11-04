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
  const [erreur, setErreur] = useState ("")
  

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
let test = "Valid"
  return (
    <div>
      <h1>Page de profil</h1>
      <h3>{erreur}</h3>
      <h3>{title} </h3> 
     {test ==="Validé" ? <div><Informations {...props}/> <Portefeuille  {...props}/><Biens {...props} /><Edition /> </div>: <div><Finalisation  /> <Docs /></div> }

     
      
    </div>
  );
}

export default Profile;
