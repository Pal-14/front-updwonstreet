import React from 'react';


function LogOut(props) {
 
  function logOut() {
    localStorage.removeItem("jwt");
    props.setIsLoggedIn(false);
    props.setUser("")
  }

  return (
    <div className="card col s12">
        <p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
      <a onClick={logOut}>Déconnexion</a>
    </div>
  );
}

export default LogOut;
