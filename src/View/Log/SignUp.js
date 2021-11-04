import { useState } from "react";
import services from "../../services";
import "./Log.css";
import { onChange } from "../../Fonctions/Formulaire";

function SignUp(props) {
  const [lastName, setlLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [erreur, setErreur] = useState("");

  async function handleSubmit(event) {
    if (
      lastName !== "" ||firstName !== "" ||email !== "" || password !== "" || confirmPassword !== "") {
      let body = {
        lastName: lastName,
        firstName: firstName,
        email: email,
        password: password,
        confirmPassword: password,
        stableCoins: 1,
      };
      let signUp = await services.addUsers(body);
      console.log(signUp.data.success);
      if (signUp.data.success) {
        setlLastName("");
        setFirstName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.log(signUp.data.token);
        localStorage.setItem("jwt", signUp.data.token);
        props.setIsLoggedIn(true);
      } else {
        setErreur(signUp.data.message);
      }
    }
  }

  return (
    <div>
      <h3>{erreur}</h3>
      <input
        onChange={(e) => onChange(e, setlLastName)}
        placeholder="Nom de Famille"
        name="lastName"
        type="text"
      ></input>
      <input
        onChange={(e) => onChange(e, setFirstName)}
        placeholder="Prénom"
        name="firstName"
        type="text"
      ></input>
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
      <input
        onChange={(e) => onChange(e, setConfirmPassword)}
        placeholder="Confirmez le mot de Passe"
        name="confirmPassword"
        type="password"
      ></input>

      <button onClick={(e) => handleSubmit(e)} type="submit">
        Send
      </button>
    </div>
  );
}

export default SignUp;
