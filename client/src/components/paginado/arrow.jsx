import React from 'react';
import ArrowImg from '../../img/56841.png'

const Arrow = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='div-arrow'>
      <button className="boton-arrow" onClick={handleClick}><img className="img-arrow" src={ArrowImg} alt='arrow'/></button>
    </div>
  );
}

export default Arrow;