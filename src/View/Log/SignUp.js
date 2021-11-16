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
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    if (
      lastName !== "" ||
      firstName !== "" ||
      email !== "" ||
      password !== "" ||
      confirmPassword !== ""
    ) {
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
        setError(signUp.data.message);
      }
    }
  }

  return (
    <div class="containSignup">
      <form class="col s12">
        <div class="row">
          <p class="rouge">{error}</p>
          <div class="input-field col s12">
            <input
              class="col s6"
              id="first_name"
              onChange={(e) => onChange(e, setlLastName)}
              placeholder="Nom de famille"
              name="lastName"
              type="text"
            ></input>
            <input
              class="col s6"
              onChange={(e) => onChange(e, setFirstName)}
              placeholder="Prénom"
              name="firstName"
              type="text"
            ></input>
          </div>

          <div class="input-field col s12">
            <input
              onChange={(e) => onChange(e, setEmail)}
              placeholder="Email"
              name="email"
              type="email"
            ></input>
          </div>
          <div class="input-field col s12">
            <input
              class="col s6"
              onChange={(e) => onChange(e, setPassword)}
              placeholder="Mot de passe"
              name="password"
              type="password"
            ></input>
            <input
              class="col s6"
              onChange={(e) => onChange(e, setConfirmPassword)}
              placeholder="Confirmez le mot de passe"
              name="confirmPassword"
              type="password"
            ></input>
          </div>
        </div>
        <a  href="" onClick={(e) => handleSubmit(e)} type="submit">
          Valider
        </a>
      </form>
    </div>
  );
}

export default SignUp;
