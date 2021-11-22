import "./App.css";
import { BrowserRouter as Router, Route, Switch , Redirect} from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import { useState, useEffect } from "react";
import Log from "./View/Log/Log";
import Profile from "./View/Profile/Profile";
import Catalog from "./View/Catalog/Catalog";
import HomeAdmin from "./View/Admin/HomeAdmin";
import Service from "./services";
import Home from "./View/Home";
import LogOut from "./View/Log/LogOut";

function App() {
  /* Déclaration variable d'état */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [itemListPublic, setItemListPublic] = useState([]);

  /* Check & récupération des infos de connexion */
  useEffect(async () => {
    let info = await Service.checkToken();
    setUser(info);
  }, [isLoggedIn]);

  /* Actualisation de l'affichage */
  useEffect(() => {
    console.log(user);
    console.log("test");
    if (user?.data?.success) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {
    console.log("Connecté:", isLoggedIn);
  }, [isLoggedIn]);

  /* Récupération des biens immobiliers */
  useEffect(() => {
    Service.publicItemList().then((response) => {
      setItemListPublic(response.data);
    });
  }, []);
  console.log("Item list:", itemListPublic);

  return (
    <div className="">
      <Router>
        <Navbar user={user} isLoggedIn={isLoggedIn} />
        <div className="Contain">
          <Switch>
            <Route path="/log">            
              <Log
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
              />
            </Route>
            <Route path="/profile">
              <Profile
                user={user}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </Route>
            <Route path="/catalog">
              <Catalog
                setItemListPublic={setItemListPublic}
                itemListPublic={itemListPublic}
              />
            </Route>
            <Route path="/admin">
              <HomeAdmin user={user} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
