import React from "react";
import {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { postPokemon, getTypes } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import './create.css'
import crealo from '../../img/crea.png'
import volver from '../../img/volver.png'


export default function PokemonCreate(){
  const dispatch = useDispatch()
  const history = useNavigate()
  const allPokemons = useSelector((state)=> state.pokemons);
  const types = useSelector((state) => state.types)


  const [errors, setErrors] = useState({});
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

  function validate(input) {
    let errors = {};
    //!==================================
    //name
    if (allPokemons.find(el => el.name === input.name)) {
      errors.name = 'El pokemon ya existe' //f
    } else if (!input.name) {
      errors.name = 'El nombre es requerido'
    } else if (input.name.length <= 4 && !input.name.match(/^[a-zA-Z\s]*$/)) {
      errors.name = 'El nombre no puede tener simbolos'
    }
  //!==================================
    //hp
    if (!input.hp) {
      errors.hp = "Es necesario un valor"
    }
    else if (input.hp < 1 || input.hp > 500) {
      errors.hp = "el puntaje debe ser entre 1 y 500"
    }
    else if (!/^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(input.hp)) {
      errors.hp = 'No puede contener simbolos'
    }
  //   //!==================================
    //attack
    if (!input.attack) {
      errors.attack = "Es necesario un valor"
    }
    else if (input.attack < 10 || input.attack > 190) {
      errors.attack = "el puntaje debe ser entre 10 y 190"
    }
    else if (!/^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(input.attack)) {
      errors.attack = 'No puede contener simbolos'
    }
  //   //!==================================
    //defense
    if (!input.defense) {
      errors.defense = "Es necesario un valor"
    }
    else if (input.defense < 1 || input.defense > 250) {
      errors.defense = "el puntaje debe ser entre 1 y 250"
    }
    else if (!/^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(input.defense)) {
      errors.defense = 'No puede contener simbolos'
    }
  //   //!==================================
    //speed
    if (!input.speed) {
      errors.speed = "Es necesario un valor"
    }
    else if (input.speed < 1 || input.speed > 180) {
      errors.speed = "el puntaje debe ser entre 1 y 180"
    }
    else if (!/^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(input.speed)) {
      errors.speed = 'No puede contener simbolos'
    }
  //   //!==================================
    //height
    if (!input.height) {
      errors.height = "Es necesario un valor"
    }
    else if (input.height < 3 || input.height > 65) {
      errors.height = "el puntaje debe ser entre 3 y 65"
    }
    else if (!/^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(input.height)) {
      errors.height = 'The attack must not have symbols'
    }
  //   //!==================================
    //weight
    if (!input.weight) {
      errors.weight = "Es necesario un valor"
    }
    else if (input.weight < 3 || input.weight > 65) {
      errors.weight = "el puntaje debe ser entre 3 y 65"
    }
    else if (!/^[+]?([1-9][0-9]*(?:[.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/.test(input.weight)) {
      errors.weight = 'The attack must not have symbols'
    }
  //   //!==================================
    if (input.image.length > 0 && !input.image.match(/^(ftp|http|https):\/\/[^ "]+$/)) {
      errors.image = 'La imagen tiene que ser un URL'
    }
   return errors;
   };


function handleChange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }))
  // console.log(allPokemons)
  // console.log(input)
  // console.log(errors)
  // console.log(input)
}


function handleSelect(e) {
  if (!input.types.includes(e.target.value))
  setInput({
    ...input,
    types: [...input.types,e.target.value]
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }))
  console.log(allPokemons)
  console.log(input)
  console.log(errors)
}


function handleSubmit(e){
  if (input.types.length !== 0 && input.types.length < 3) {
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
    history('/home')
  }  
}



useEffect(() => {
  dispatch(getTypes());
}, [dispatch]);

return(
  <div className="create-principal">

   <img className="titulo-create" src={crealo} alt="crealo"/> 
    
    <div className="Contendor-create">
    <form className="form-create" onSubmit={handleSubmit}>

      <div id="createInput">
        <label id="label-create">Name:</label>
        <input id="input-create"
          type='text' 
          value= {input.name}
          name = 'name'
          onChange={(e)=>handleChange(e)}/>
          {errors.name && (
          <p className="error">{errors.name}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">hp:</label>
        <input 
          id="input-create"
          className="hp"
          type='text' 
          value= {input.hp}
          name = 'hp'
          onChange={(e)=>handleChange(e)}/>
          {errors.hp && (
          <p className="error">{errors.hp}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">attack:</label>
        <input 
          id="input-create"
          type='text' 
          value= {input.attack}
          name = 'attack'
          onChange={(e)=>handleChange(e)}/>
          {errors.attack && (
          <p className="error">{errors.attack}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">defense:</label>
        <input 
          id="input-create"
          type='text' 
          value= {input.defense}
          name = 'defense'
          onChange={(e)=>handleChange(e)}/>
          {errors.defense && (
          <p className="error">{errors.defense}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">speed:</label>
        <input 
          id="input-create"
          type='text' 
          value= {input.speed}
          name = 'speed'
          onChange={(e)=>handleChange(e)}/>
          {errors.speed && (
          <p className="error">{errors.speed}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">height:</label>
        <input 
          id="input-create"
          type='text' 
          value= {input.height}
          name = 'height'
          onChange={(e)=>handleChange(e)}/>
          {errors.height && (
          <p className="error">{errors.height}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">weight:</label>
        <input 
          id="input-create"
          type='text' 
          value= {input.weight}
          name = 'weight'
          onChange={(e)=>handleChange(e)}/>
          {errors.weight && (
          <p className="error">{errors.weight}</p>
          )}
      </div>

      <div id="createInput">
        <label id="label-create">image:</label>
        <input 
          id="input-create"
          type='text' 
          value= {input.image}
          name = 'image'
          onChange={(e)=>handleChange(e)}/>
          {errors.image && (
          <p className="error">{errors.image}</p>
          )}
      </div>

      
        <select className="typeSelect"
          onChange={(e) =>handleSelect(e)}>
          {types.map((ty) =>{
            return <option value={ty.name}>{ty.name}</option>
          })}{errors.input && (
            <p className="error">{errors.input}</p>
          )}
        </select>
        <div className="input-type">
        {input.types.map(el => el + ' ,')}
      </div>

      <button 
        type="submit"
        id="input-create" 
        disabled={Object.entries(errors).length ? true : false}>Crear Pokemon</button>
    </form>

    
    </div>
    <Link to = '/home' className="a-create">
    <img className="volver-create" src={volver} alt="crealo"/>
    </Link>
  </div>
        
  )
}