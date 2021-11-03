import { useState } from "react";
import services from "../../services";
import "./Log.css";
import { onChange } from "../../Fonctions/Formulaire";

function SignUp() {
  const [lastName, setlLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [erreur, setErreur] = useState ("")

  async function handleSubmit(event) {
    event.preventDefault();
    if (lastName !== "" || firstName !== "" || email !== "" || password !== "" || confirmPassword !=="" ) {
      let body = {
        lastName: lastName,
        firstName: firstName,
        email: email,
        password: password,
        confirmPassword:password, 
        stableCoin: 1
      };
      let signUp = await services.addUsers(body);
      if (signUp.data.success) {
        let logIn = await services.logUsers(body);
        if (logIn.data.success) {
            setlLastName("")
            setFirstName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
          localStorage.setItem("jwt", signUp.data.token);
        }
        else {
            setErreur(logIn.data.message)
        }
      }
    }
  }

  return (
    <div>
      
      <h3>{erreur}</h3>
      <input
        onChange={(e) => onChange(e, setlLastName)}
        placeholder="lastName"
        name="lastName"
        type="text"
      ></input>
      <input
        onChange={(e) => onChange(e, setFirstName)}
        placeholder="firstName"
        name="firstName"
        type="text"
      ></input>
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
       <input
        onChange={(e) => onChange(e, setConfirmPassword)}
        placeholder="confirm password"
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
