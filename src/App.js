import React from 'react';
import './App.css';
// import Button from './components/atom/Button/Button';
// import ButtonAxios from './components/atom/Button/ButtonAxios';
// import Logo from './images/PokemonLogo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/molecules/Home'
import Landscreen from './components/molecules/LandScreen';


export default function App() {
  return (
    {/*
    <div className="page">
      <img src={Logo} alt="logo" />
      <Button />
      <ButtonAxios classNameString="axiosButton" />
    </div>
*/}
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/landScreen">Page d'accueil</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/landScreen">
            <Landscreen />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}



