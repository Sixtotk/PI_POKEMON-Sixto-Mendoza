import axios from "axios";
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'
//https://pokemon-app-ycbn.onrender.com/pokemons

export function getPokemons(){
  return async function(dispatch){
    var json = await axios.get("https://pokemon-app-ycbn.onrender.com/pokemons");


    return dispatch({
      type: GET_POKEMONS,
      payload: json.data
     })
  }
}

export function getTypes(){
  return async function(dispatch){
    var types = await axios.get("https://pokemon-app-ycbn.onrender.com/types");

    return dispatch({
      type: GET_TYPES,
      payload: types.data
    })
  }
}
export function getPokemonsbyName(name){
  return async function(dispatch){
  try{
    var json = await axios.get(`https://pokemon-app-ycbn.onrender.com/pokemons?name=${name}`);
    return dispatch({
      type: 'GET_NAME_POKEMON',
      payload: json.data
    })}catch{
      alert("no existe el pokemon")
    }
  }

}
export function getDetail(id){
  return async function(dispatch){
    var json = await axios.get(`https://pokemon-app-ycbn.onrender.com/pokemons/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data
    })
    
  }
}

export function postPokemon(payload){
  return async function(dispatch){
    var json = await axios.post("https://pokemon-app-ycbn.onrender.com/pokemons",payload);
    
    return json
  }
}

export function filterPokemonsCreate(payload){
   return {
    type: 'FILTER_CREATE',
    payload
   }
}

export function filterPokemonsByName(payload){
  return {
   type: 'FILTER_BY_NAME',
   payload
  }
}
export function filterPokemonsByAttack(payload){
  return {
   type: 'FILTER_BY_ATTACK',
   payload
  }
}

export function filterTypes(payload) {
  return {
    type: 'FILTER_TYPES',
    payload
  }
}

export function clear(){
  return{
    type: 'CLEAR'
  }
}
