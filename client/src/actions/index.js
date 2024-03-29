import axios from "axios";
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'
//https://pokemon-app-ycbn.onrender.com/pokemons
//https://hobart-stonefish-cdcb.2.us-1.fl0.io/pokemons


export function getPokemons() {
  return async function (dispatch) {
    try {
      var json = await axios.get("https://hobart-stonefish-cdcb.2.us-1.fl0.io/pokemons");
      return dispatch({
        type: GET_POKEMONS,
        payload: json.data,
      });
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      // Puedes agregar aquí algún mensaje de error o realizar alguna acción adicional
    }
  };
}

export function getTypes(){
  return async function(dispatch){
    var types = await axios.get("https://hobart-stonefish-cdcb.2.us-1.fl0.io/types");

    return dispatch({
      type: GET_TYPES,
      payload: types.data
    })
  }
}
export function getPokemonsbyName(name){
  return async function(dispatch){
  try{
    var json = await axios.get(`https://hobart-stonefish-cdcb.2.us-1.fl0.io/pokemons?name=${name}`);
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
    var json = await axios.get(`https://hobart-stonefish-cdcb.2.us-1.fl0.io/pokemons/${id}`);
    return dispatch({
      type: 'GET_DETAIL',
      payload: json.data
    })
    
  }
}

export function postPokemon(payload){
  return async function(dispatch){
    var json = await axios.post("https://hobart-stonefish-cdcb.2.us-1.fl0.io/pokemons",payload);
    
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
