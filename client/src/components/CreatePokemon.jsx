import React from "react";
import {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions";
import { useDispatch, useSelector } from "react-redux";


export default function PokemonCreate(){
  const dispatch = useDispatch()
  const history = useHistory()
  const types = useSelector((state) => state.types)

  const [input, setInput] = useState({
    name: "",
    hp: "", 
    attack: "", 
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  })

function handleChange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  console.log(input)
}

function handleSelect(e) {
  setInput({
    ...input,
    types: [...input.types,e.target.value]
  })
}

function handleSubmit(e){
  e.preventDefault();
  console.log(input)
  dispatch(postPokemon(input))
  alert("Pokemon Creado")
  setInput({
    name: "",
    hp: "", 
    attack: "", 
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  })
  history.push('/home')
}



  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return(
    <div>
      <Link to = '/home'><button>Volver</button></Link>
      <h1> Crea tu propio Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type='text' 
            value= {input.name}
            name = 'name'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>hp:</label>
          <input 
            type='text' 
            value= {input.hp}
            name = 'hp'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>attack:</label>
          <input 
            type='text' 
            value= {input.attack}
            name = 'attack'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>defense:</label>
          <input 
            type='text' 
            value= {input.defense}
            name = 'defense'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>speed:</label>
          <input 
            type='text' 
            value= {input.speed}
            name = 'speed'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>height:</label>
          <input 
            type='text' 
            value= {input.height}
            name = 'height'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>weight:</label>
          <input 
            type='text' 
            value= {input.weight}
            name = 'weight'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
          <label>image:</label>
          <input 
            type='text' 
            value= {input.image}
            name = 'image'
            onChange={(e)=>handleChange(e)}/>
        </div>
        <select
        onChange={(e) =>handleSelect(e)}>
          {types.map((ty) =>{
            return <option value={ty.name}>{ty.name}</option>
          })}
        </select>
        <ul><li>{input.types.map(el => el + ' ,')}</li></ul>
        <button type="submit">Crear Pokemon</button>
            </form>
        </div>
    )
}