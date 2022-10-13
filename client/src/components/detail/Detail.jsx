import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import './detail.css'

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
        
        <div className="container">
          <div className="cardDetail">
          <h2 className="card_hp">Vida: {myPokemon.hp}</h2>
          <img  className="card_img" src={myPokemon.image} alt="pokemon" />
          <h1 className="name_poke">{myPokemon.name}</h1>
          {/* <h2 className="name_id">ID: {myPokemon.id}</h2> */}
          <h2 className="card_attack">Ataque: {myPokemon.attack}</h2>
          <h2 className="card_defense">Defensa: {myPokemon.defense}</h2>
          <h2 className="card_speed">Velocidad: {myPokemon.speed}</h2>
          <h2 className="card_alt">Altura: {myPokemon.height}</h2>
          <h2 className="card_peso">Peso: {myPokemon.weight}</h2>
          <h2 className="card_tipos">Tipos: {myPokemon.types + " "}</h2>
          </div>
        </div>
        
      }
      <Link to='/home'>
      <button className="botonD">Volver</button>
      </Link>
    </div>
  )
}