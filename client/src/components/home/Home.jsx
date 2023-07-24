import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect} from 'react';
import { useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { filterPokemonsCreate,
     getPokemons,
      filterPokemonsByName,
       filterPokemonsByAttack,
         filterTypes, 
         getTypes} from '../../actions/index'
import Card from '../card/Card'
import Paginado from "../paginado/Paginado";
import SearchBar from "../paginado/SearchBar";
// import './home.css'
import Saludo from '../imagenes/b083609574e798ca74a4048b61f2dff7.png'

export function Home (){

const dispatch = useDispatch();
const allPokemons = useSelector((state)=> state.pokemons);
const allTypes = useSelector((state) => state.types)

const [currentPage, setCurrentPage] = useState(1);
const [pokemonsPerPage, setPokemonsPerPage ] = useState(12);
const indexOfLastPokemon = currentPage * pokemonsPerPage;
const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
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
  <div>
    <h1><img src={Saludo} alt='saludo'/></h1>
    <div className="contenedorNav">

    <div className="unir">
      <button className="recarga" onClick={e => { handleClick(e)}}>Recargar</button>
      <SearchBar />
      <Link to = '/pokemon'><button className="crear">Crea tu propio Pokemon</button></Link>
    </div>  

    <div className="elegir">
      <select className="Letras" onChange={e => handleSort(e)}>
        <option value="all">Ordena por nombre!</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>

      <select className="creados" onChange={e => handlefilterCreated(e)}>
        <option value="all"> Ordena por estado!</option>
        <option value="api" >Existentes</option>
        <option value="db" >Creados</option>
      </select>

      <select className="fuerza" onChange={(e) => handleSortAttack(e)}>
        <option value="All">Ordena por fuerza</option>
        <option value="debiles">De mas debil a mas fuerte</option>
        <option value="fuertes">De mas fuerte a mas debil</option>
      </select>
      
      <select className="tipos" onChange={(e) =>{handleTypes((e))}}>
        <option value="All">Tipos</option>
        {allTypes?.map((ty) =>{return(
          <option value={ty.name} key={ty.id}>{ty.name.toUpperCase()}</option>
        )})}

      </select>
        <div>
          <Paginado
          pokemonsXpagina = {pokemonsPerPage}
          allPokemons ={allPokemons.length}
          paginado ={paginado} />
        </div>
    </div>
    </div>  

    {currentPokemons?.map((e)=>{
      return(
        <Fragment>
        <Link to={`/home/${e.id}`}>
        <Card
          name={e.name}
          types={e.types}
          image={e.image}
        />
        </Link>
        </Fragment>
      )
      })}
  </div>
)
};