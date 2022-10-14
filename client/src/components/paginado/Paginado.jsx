import React from 'react'
import "../home/home.css"

export default function Paginado  ({pokemonsXpagina, allPokemons, paginado }) {
   const pageNumber = []
   for (let i = 0; i < Math.ceil(allPokemons/pokemonsXpagina); i++) {
      pageNumber.push(i+1)
     }

   return (
    <div className='contPag'>
     <nav className='navPaginado' >
      {pageNumber?.map(number=>(
        <div onClick={()=>paginado(number)} key={number}>
         <button className='buttonPaginado'>{number} </button> 
      </div>
     ))
    }
    </nav>
    </div>
   )
  }
