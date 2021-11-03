import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
import LogIn from './View/Log/Log';
import SignUp from './View/Log/SignUp';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Log from './View/Log/Log';

function App() {

  /* Déclaration variable d'état */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Vérification du statut de connexion */
  const checkIsLoggedIn = () => {
      let jwt = localStorage.getItem("jwt"); // Récupération du token de connexion
      if(jwt !== null) {
          setIsLoggedIn(true);
      } else {
          setIsLoggedIn(false);
      }
  };

  /* Actualisation de l'affichage */
  useEffect(() => {
      checkIsLoggedIn();
  }, []);

  useEffect(() => {
      console.log("Connecté:", isLoggedIn)
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/log">
            <Log isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
        <LogIn/>

        
      </Router>
    </div>
  );
}

export default App;
