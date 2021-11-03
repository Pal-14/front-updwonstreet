import { useState } from "react";

function LogOut(props) {
  const [button, setButton] = useState("Déconnexion");

  function logOut() {
    localStorage.removeItem("jwt");
    props.setIsLoggedIn(false);
  }

  return (
    <div>
      <button onClick={logOut}>Déconnexion</button>
    </div>
  );
}

export default LogOut;
