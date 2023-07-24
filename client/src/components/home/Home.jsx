/**librerias*/
import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect} from 'react';
import { useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";

/**actions*/
import { filterPokemonsCreate,
     getPokemons,
      filterPokemonsByName,
       filterPokemonsByAttack,
         filterTypes, 
         getTypes} from '../../actions/index'

/**componentes */
import Card from '../card/Card'
import Paginado from "../paginado/Paginado";
import SearchBar from "../paginado/SearchBar";
import Arrow from "../paginado/arrow";

/**imagenes */
import pokeapp from '../../img/pokeapp.png';
import recargar from '../../img/recargar.png'
import Crea from '../../img/CreatupropioPokémon.png'

export function Home (){

const dispatch = useDispatch();
const allPokemons = useSelector((state)=> state.pokemons);
const allTypes = useSelector((state) => state.types)

const [currentPage, setCurrentPage] = useState(1);
const [pokemonsPerPage, setPokemonsPerPage ] = useState(8);
const indexOfLastPokemon = currentPage * pokemonsPerPage;
const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
const currentPokemons = allPokemons.slice
(indexOfFirstPokemon, indexOfLastPokemon);
const [order, setOrder] = useState('')

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getTypes())
},[dispatch]);


function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons(e));
  }


function handlefilterCreated(e){
    dispatch(filterPokemonsCreate(e.target.value))
    setCurrentPage(1)
    
}


function handleSort(e) {
    e.preventDefault();
    dispatch(filterPokemonsByName(e.target.value));
    setCurrentPage(1)
    
    setOrder(`Ordenado ${e.target.value}`)
}


function handleSortAttack(e){
    e.preventDefault();
    dispatch(filterPokemonsByAttack(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
    
}


function handleTypes(e){
    e.preventDefault()
    dispatch(filterTypes(e.target.value));
    setCurrentPage(1)
    setOrder(e.target.value);
}


return(
  <div className="principal-home">
    
    <div className="contenedorNav">
      
      <div  className="contenedor-img-pokeapp">
        <img className="pokeapp" src={pokeapp} alt='saludo'/>
      </div>
      <div className="cuadroNav">
      <SearchBar/>
      <div className="unir">  
        <button className="recarga" onClick={e => { handleClick(e)}}><img className="img-recargar" src={recargar} alt='recargar'/></button>
        <Link to = '/pokemonsCreate' className="crearA"><button className="crear"><img className="img-crear" src={Crea} alt='crear'/></button></Link>
      </div>  

      <div className="Principal-elecciones">
        <select className="elecciones" onChange={e => handleSort(e)}>
          <option value="all">Ordena por nombre</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>

        <select className="elecciones" onChange={e => handlefilterCreated(e)}>
          <option value="all"> Ordena por estado</option>
          <option value="api" >Existentes</option>
          <option value="db" >Creados</option>
        </select>

        <select className="elecciones" onChange={(e) => handleSortAttack(e)}>
          <option value="All">Ordena por fuerza</option>
          <option value="debiles">De mas debil a mas fuerte</option>
          <option value="fuertes">De mas fuerte a mas debil</option>
        </select>
      
        <select className="elecciones" onChange={(e) =>{handleTypes((e))}}>
          <option value="All">Tipos</option>
          {allTypes?.map((ty) =>{return(
         <option value={ty.name} key={ty.id}>{ty.name.toUpperCase()}</option>
          )})}
        </select>
        </div>
          <Paginado
          pokemonsXpagina = {pokemonsPerPage}
          allPokemons ={allPokemons.length}
          paginado ={paginado} />
      </div>
    </div>
    <Arrow key={'arrow'}/>
    <div className='all-cards'>
    {currentPokemons?.map((e)=>{
      return(
        <Fragment>
        <Link to={`/home/${e.id}`} className="a-cards">
        <Card
          key={e.name}
          name={e.name}
          types={e.types}
          image={e.image}
        />
        </Link>
        </Fragment>
      )
      })}
      </div>
  </div>
)
};