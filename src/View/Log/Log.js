import { useState } from "react"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import LogOut from "./LogOut"



function Log(props) {
  // Variable état
  const [title, setTitle] = useState("Connexion") //Je suis sur connexion de base
  const [text, setText] = useState("Je n'ai pas encore de compte et je souhaite m'inscrire")// variable de base Je n'ai pas de compte....... 
  const [button, setButton] = useState ("Aller à l'inscription")// le bouton est par défaut Aller à l'inscription

  //fonction pour : lorsque je suis sur connexion je puisse appuyer sur le bouton 
  //et changer l'état à j'ai un compte et envoyé les modifications des setters
  //et affiché le texte de remplacement de setTitle/setText et setButton
function change () {
  if (title === "Connexion") {
    setTitle("Inscription")
    setText("J'ai déjà un compte")
    setButton("Se connecter") 
  }
  else {
    setTitle("Connexion")
    setText("Je n'ai pas encore de compte et je souhaite m'inscrire")
    setButton("Aller à l'inscription")
  }
}
//si je ne  suis pas connecté je retourne 
//de base le rendu connexion avec la possibilité de : changer au clic du bouton
//et passer sur l'état j'ai déjà un compte et envoyer le rendu avec les Setters correspondant
if (props.isLoggedIn === false){return (

    <div>
      <h4>{title}</h4>
     {title === "Connexion" ? <LogIn {...props} /> : <SignUp {...props} />}
      <div>
          <p>{text}</p>
        <a onClick={change} >{button}</a>
      </div>
    </div>
  );}
  else {
    return(<LogOut {...props} />)
    
  }
  
}

export default Log;
