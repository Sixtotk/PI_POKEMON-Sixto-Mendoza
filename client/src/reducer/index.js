import {GET_POKEMONS} from '../actions/index'
import { GET_TYPES } from '../actions/index';

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail:[]
}

function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_POKEMONS:
      return{
         ...state,
        pokemons: action.payload,
        allPokemons: action.payload  
      }

    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      }

    case 'GET_DETAIL':
      return{
        ...state,
        detail: action.payload
      }  

    case 'FILTER_CREATE':
      const allPokemons = state.allPokemons;
      const createdFilter = action.payload === 'db' ? allPokemons.filter(el => el.createdInDb) : state.allPokemons.filter(el => !el.createdInDb)
      return{
        ...state,
        pokemons: action.payload === "all" ? state.allPokemons : createdFilter
      }

    case 'FILTER_BY_NAME':
      let sortedArr = action.payload === 'a-z' ? state.pokemons.sort((a,b) => {
        if(a.name > b.name){
          return 1;
        }
        if(a.name < b.name) {
          return -1;
        } return 0;
      }) : state.pokemons.sort((a,b) => {
        if(a.name > b.name){
          return -1
        }
        if(a.name < b.name){
          return 1
        } return 0
      })
      return{
        ...state,
        pokemons: sortedArr
      }

    case 'FILTER_BY_ATTACK':
      let sortedArrA = action.payload === 'debiles' ? state.pokemons.sort((a,b) => {
        if(a.attack > b.attack){
          return 1;
        }
        if(a.attack < b.attack) {
          return -1;
        } return 0;
      }) : state.pokemons.sort((a,b) => {
        if(a.attack > b.attack){
          return -1
        }
        if(a.attack < b.attack){
          return 1
        } return 0
      })
      return{
        ...state,
        pokemons: sortedArrA
      }
    
    case 'FILTER_TYPES':
      let filterType = state.allPokemons.filter((e) => {
      if(e.types?.includes(action.payload)) 
        return e
      })
      if(action.payload === "All"){
        filterType = state.allPokemons
      }
      return {
        ...state,
        pokemons: filterType
      }
     
    case 'POST_POKEMON':
      return {
        ...state
      }
      
    case 'GET_NAME_POKEMON':
      return{
        ...state,
        pokemons: action.payload
      }
    case 'CLEAR':
      return{
        ...state,
        detail: []
      }

    
    default:
      return state;
  }
}
export default rootReducer;