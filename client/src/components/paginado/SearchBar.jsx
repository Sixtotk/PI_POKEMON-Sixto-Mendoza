import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsbyName } from "../../actions/index";
import buscar from '../../img/2d50a6320bf86c1db4964edb8503c79f.png'
import './SearchBar.css'


export default function SearchBar(){
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(getPokemonsbyName(name))
    setName("")
  }

  return(
    <div className="navegador">
      <input
        className="input-createav"
        type="text"
        placeholder="buscar un pokemon..."
        onChange={(e) => handleInputChange(e)} />
      <button
        className="botonNav"
        type="submit"
        onClick={(e) => handleSubmit(e)}
        ><img className="img-buscar" src={buscar} alt='img-buscar'/></button>
    </div>
  )
}