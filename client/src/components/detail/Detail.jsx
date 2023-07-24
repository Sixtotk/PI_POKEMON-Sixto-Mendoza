import React, { useEffect } from "react";
import {Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clear } from "../../actions/index";
import './detail.css'
import volver from '../../img/volver.png'
import pokedex from '../../img/pokedex.png'


export default function DetailPoke(){
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch()
  const myPokemon = useSelector((state) => state.detail)

  useEffect(() => {
    dispatch(getDetail(id));
    return () => dispatch(clear())
  }, [dispatch, id])

  
  return(
    <div className="container-detail">

      <img className="pokedex-detail" src={pokedex} alt="crealo"/>
      <div className="container-pokedex">
          <div className="cardDetail">
          <h2 className="card_hp">Vida: {myPokemon.hp}</h2>
          <img  className="card_img" src={myPokemon.image} alt="pokemon" />
          <h1 className="name_poke">{myPokemon.name}</h1>
          <h2 className="card_info">Ataque: {myPokemon.attack}</h2>
          <h2 className="card_info">Defensa: {myPokemon.defense}</h2>
          <h2 className="card_info">Velocidad: {myPokemon.speed}</h2>
          <h2 className="card_info">Altura: {myPokemon.height}</h2>
          <h2 className="card_info">Peso: {myPokemon.weight}</h2>
          <h2 className="card_tipos">Tipos: {myPokemon.types + " "}</h2>
          </div>
        </div>
       
      <Link to='/home' className="avolver-detail">
      <img className="volver-detail" src={volver} alt="crealo"/>
      </Link>
    </div>
  )
}