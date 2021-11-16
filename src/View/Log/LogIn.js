import { useState } from "react";
import { onChange } from "../../Fonctions/Formulaire";
import services from "../../services";

function LogIn(props) {
  // Je déclare mes variables d'états + celles des erreurs pour retourner les messages du back
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
        localStorage.setItem("jwt", logIn.data.token);
        props.setIsLoggedIn(true);
      } else {
        setError(logIn.data.message);
      }
    }
  }

  return (
    <div>
      <p className="rouge">{error}</p>

      <input
        onChange={(e) => onChange(e, setEmail)}
        placeholder="Email"
        name="email"
        type="email"
      ></input>
      <input
        id="password"
        onChange={(e) => onChange(e, setPassword)}
        placeholder="Mot de passe"
        name="password"
        type="password"
      ></input>
      <a onClick={(e) => handleSubmit(e)} type="submit">
        Valider
      </a>
    </div>
  );
}

export default LogIn;
