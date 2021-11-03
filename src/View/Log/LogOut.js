import { useState } from "react";


function LogOut(props) {
 
  function logOut() {
    localStorage.removeItem("jwt");
    props.setIsLoggedIn(false);
  }

  return (
    <div>
        <h3>Êtes-vous sûr de vouloir vous déconnectez ?</h3>
      <button onClick={logOut}>Déconnexion</button>
    </div>
  );
}

export default LogOut;
