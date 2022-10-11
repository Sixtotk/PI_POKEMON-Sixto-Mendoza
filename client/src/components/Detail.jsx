import React, { useEffect } from "react";

import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";

export default function DetailPoke(props){
  console.log(props);
  const dispatch = useDispatch()
  const myPokemon = useSelector((state) => state.detail)

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id])

  
  return(
    <div>
      {
        
        <div>
          <h1>{myPokemon.name}</h1>
          <img src={myPokemon.image} alt="pokemon" />
          <h2>ID: {myPokemon.id}</h2>
          <h2>Vida: {myPokemon.hp}</h2>
          <h2>Ataque: {myPokemon.attack}</h2>
          <h2>Defensa: {myPokemon.defense}</h2>
          <h2>Velocidad: {myPokemon.speed}</h2>
          <h2>Altura: {myPokemon.height}</h2>
          <h2>Peso: {myPokemon.weight}</h2>
          <h2>Tipos: {myPokemon.types + " "}</h2>
        </div>
        
      }
      <Link to='/home'>
      <button>Volver</button>
      </Link>
    </div>
  )
}