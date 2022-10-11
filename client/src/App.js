import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import React from 'react';
import LandingPage from './components/LandingPage';
import {Home} from './components/Home';
import CreatePokemon from './components/CreatePokemon';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/home/:id' component={Detail} />
      <Route path='/Pokemon' component={CreatePokemon} />
      </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
