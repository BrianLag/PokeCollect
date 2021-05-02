import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Components imports
import Home from './components/molecules/Home'
import Landscreen from './components/molecules/LandScreen';
import Pokelist from './components/molecules/Pokelist';
import Pokemon from './components/molecules/Pokemon';


const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});


export default function App() {
  return (
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
            <li>
              <Link to="/api">Pokédex</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <ApolloProvider client={client}>

          <Switch>
            <Route path="/landScreen">
              <Landscreen />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/api">
              <Pokelist />
            </Route>
            <Route path="/pokemon/:id" children={<Pokemon />} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ApolloProvider>
      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}



