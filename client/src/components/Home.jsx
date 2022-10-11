import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect} from 'react';
import { useDispatch , useSelector} from "react-redux";
import { filterPokemonsCreate, getPokemons, filterPokemonsByName, filterPokemonsByAttack, getTypes, filterTypes } from '../actions/index'
import Card from './Card'
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

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
//console.log("AHHHHHHHHHHHHHHHHHHHHHH",allPokemons)
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
    setCurrentPage(1);
}

function handleSort(e) {
    e.preventDefault();
    dispatch(filterPokemonsByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
}

function handleSortAttack(e){
    e.preventDefault();
    dispatch(filterPokemonsByAttack(e.target.value))
    setCurrentPage(1);
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
        <h1>Aqui van los Pokemosn</h1>
            <div className="actividad">
            </div> 
            <button onClick={e => { handleClick(e)}}>Refresh</button>
            <SearchBar />
            <Link to = '/pokemon'><button>Crea tu propio Pokemon</button></Link>
            <div className="elegir">
                <select onChange={e => handleSort(e)}>
                    <option value="all">Ordena por nombre!</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
                <select onChange={e => handlefilterCreated(e)}>
                    <option value="all"> Ordena por estado!</option>
                    <option value="api" >Existentes</option>
                    <option value="db" >Creados</option>
                </select>
                <select onChange={(e) => handleSortAttack(e)}>
                    <option value="All">Ordena por fuerza</option>
                    <option value="debiles">De mas debil a mas fuerte</option>
                    <option value="fuertes">De mas fuerte a mas debil</option>
                </select>




                <select onChange={(e) =>{handleTypes((e))}}>
                    <option value="All">tipos</option>
                {allTypes?.map((ty) =>{return(
                   <option value={ty.name} key={ty.id}>{ty.name.toUpperCase()}</option>
          )})}







                </select>
                <Paginado
                pokemonsXpagina = {pokemonsPerPage}
                allPokemons ={allPokemons.length}
                paginado ={paginado} />
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