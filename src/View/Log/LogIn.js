import { useState } from "react";
import { onChange } from "../../Fonctions/Formulaire";
import services from '../../services'





function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState("");

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
          localStorage.setItem("jwt", /* logIn.data.token */"oui");
          props.setIsLoggedIn (true)
        } else {
          setErreur(logIn.data.message);
        }
      }
    }
  

  return (
    <div>
     
     
      <h3>{erreur}</h3>
     
      <input
        onChange={(e) => onChange(e, setEmail)}
        placeholder="email"
        name="email"
        type="email"
      ></input>
      <input
        onChange={(e) => onChange(e, setPassword)}
        placeholder="password"
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
