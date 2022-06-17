    import React from 'react'
    import './ItemStyle.css';

    
    export const Item = ({imagen, nombre, precio}) => {
      return (
        <div className='card'>
          <div className='imgContainer'>
            <img src={imagen} alt="repuesto"/>
          </div>
          <h1>{nombre}</h1>
          <p> $ {precio}</p>
          <button>Ver detalle</button>
        </div>
      )
    }
    