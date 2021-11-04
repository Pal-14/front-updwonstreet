import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Log from './View/Log/Log';
import checkToken from './services';
import Profile from './View/Profile/Profile';
import Catalog from './View/Catalog/Catalog';
import Admin from './View/Admin/Admin';
import Service from './services';


function App() {

  /* Déclaration variable d'état */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState ("")

  /* Check & récupération des infos de connexion */
  useEffect ( async () => {
    let info = await Service.checkToken();
    setUser(info)
  },[]);

  /* Actualisation de l'affichage */
  useEffect(() => {
    console.log(user);
    console.log("test");
      if (user?.data?.success){
        setIsLoggedIn(true) 
      }
      else {
        setIsLoggedIn(false)
      }
  }, [user]);

  useEffect(() => {
      console.log("Connecté:", isLoggedIn)
  }, [isLoggedIn]);

 
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <Switch>
          <Route path="/log">
            <Log isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
          </Route>
          <Route path="/profile">
            <Profile user={user} isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
        

        
      </Router>
    </div>
  );
}

export default App;
