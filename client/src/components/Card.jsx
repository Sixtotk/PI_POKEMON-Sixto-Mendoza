import React from "react";

export default function Card({name, image, types }){

  const typesMapped = types?.map((e) => (
    <h5 key={e}>{e[0].toUpperCase() + e.slice(1)}</h5>
  ));
  
  return(
    <div>
      
      <h3>{name}</h3>
      <img src= {image} alt="img not found"/>
      <div>{typesMapped}</div>
      
     </div>
  )
}

// export default function Card({name, image, types, id}) {  
//     return(
//         <div>
//              <NavLink className="none" to={`/pokemon/${id}`}>
//                 <div>
//                     <img className="img" src={image} alt="img not found"/* width="200px" height="250vh"*/ />
//                     <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>                                 
//                     <div>
//                   <h3> Type: </h3>
        
//                 </div>

