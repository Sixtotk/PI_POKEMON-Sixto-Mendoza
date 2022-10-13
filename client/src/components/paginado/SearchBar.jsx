import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsbyName } from "../../actions/index";
import '../home/home.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value);
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getPokemonsbyName(name))
        setName("")
    }

    return(
        <div className="nav">
            <input
            className=" input"
            type="text"
            placeholder="buscar un pokemon..."
            onChange={(e) => handleInputChange(e)} />
            <button
            className=" boton2"
            type="submit"
            onClick={(e) => handleSubmit(e)}
            >Buscar</button>
        </div>
    )
}