import { useState } from "react"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import LogOut from "./LogOut"



function Log(props) {

  const [title, setTitle] = useState("Connexion")
  const [text, setText] = useState("Je n'ai pas encore de compte et je souhaite m'inscrire")
  const [button, setButton] = useState ("Aller à l'inscription")

function change () {
  if (title === "Connexion") {
    setTitle("Inscription")
    setText("J'ai déja un Compte")
    setButton("Se connecter") 
  }
  else {
    setTitle("Connexion")
    setText("Je n'ai pas encore de compte et je souhaite m'inscrire")
    setButton("Aller à l'inscription")
  }
}
if (props.isLoggedIn === false){return (

    <div>
      <h1>{title}</h1>
     {title === "Connexion" ? <LogIn {...props} /> : <SignUp {...props} />}
      <div>
          <p>{text}</p>
        <button onClick={change} >{button}</button>
      </div>
    </div>
  );}
  else {
    return(<LogOut {...props} />)
    
  }
  
}

export default Log;
