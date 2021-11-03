import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Layout/Navbar/Navbar';
import LogIn from './View/Log/Log';
import SignUp from './View/Log/SignUp';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
        <LogIn/>

        {/* <SignUp/> */}
      </Router>
    </div>
  );
}

export default App;
