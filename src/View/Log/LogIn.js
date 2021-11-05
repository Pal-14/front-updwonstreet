import { useState } from "react";
import { onChange } from "../../Fonctions/Formulaire";
import services from '../../services'





function LogIn(props) {
  //je déclare mes variables d'états + celle des erreurs pour retourné les messages du back
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    
    if (email !== "" || password !== "") {
      let body = {
        email: email,
        password: password,
      };     
        let logIn = await services.logUsers(body);
        if (logIn.data.token) {
          setEmail("");
          setPassword("");
          localStorage.setItem("jwt",logIn.data.token);
          props.setIsLoggedIn (true)
        } else {
          setError(logIn.data.message);
        }
      }
    }
  

  return (
    <div>
     
     
      <h3>{error}</h3>
     
      <input
        onChange={(e) => onChange(e, setEmail)}
        placeholder="Email"
        name="email"
        type="email"
      ></input>
      <input
        onChange={(e) => onChange(e, setPassword)}
        placeholder="Mot de Passe"
        name="password"
        type="password"
      ></input>
      <button onClick={(e) => handleSubmit(e)} type="submit">
        Send
      </button>
    </div>
  );
}

export default LogIn;
