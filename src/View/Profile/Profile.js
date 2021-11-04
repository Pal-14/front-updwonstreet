import Biens from "./Biens";
import Informations from "./Informations";
import Portefeuille from "./Portefeuille";
import "./Profile.css";
import Finalisation from "./Finalisation";
import { useState } from "react";
import Service from "../../services";

function Profile(props) {
    
  const [title, setTitle] = useState ("Validé")
  const [erreur, setErreur] = useState ("")
  

 /*  function change() {
    if (title === "Validé") {
          return ( setTitle( <div>
          <Informations />
          <Portefeuille />
          <Biens />
        </div>)
       
      );
    }
    else {
        if(title !== "Validé") {
            return ( setTitle( <div><Finalisation/></div>)
               
            )
        }
        }
  } */

  return (
    <div>
      <h1>Page de profil</h1>
       <h3>{erreur}</h3>
      {/* {title === "Validé " ? {change} :<Finalisation /> } */}

      <Finalisation  />
      <Informations {...props}/>
      <Portefeuille />
      <Biens />
    </div>
  );
}

export default Profile;
