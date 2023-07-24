import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandinPage from './components/landin/landin';
import { Home } from './components/home/Home';
import DetailPoke from './components/detail/Detail'
import PokemonCreate from './components/create/CreatePokemon';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>  
          <Route exact path='/' Component={ LandinPage }/>
          <Route exact path='/Home' Component={ Home }/>
          <Route path='/pokemonsCreate' Component={ PokemonCreate }/>
          <Route path="/home/:id" Component={ DetailPoke }/>
        </Routes>   
      </div>
    </BrowserRouter>
  );
}

export default App;

