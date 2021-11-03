import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Log from './View/Log/Log';
import checkToken from './services';

function App() {

  /* Déclaration variable d'état */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* Vérification du statut de connexion */
  const checkIsLoggedIn = async () => {
    let jwt = await checkToken();
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
        

        
      </Router>
    </div>
  );
}

export default App;
