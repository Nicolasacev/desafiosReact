import React from 'react'
import './ordenDeCompra.css';


const OrdenDeCompra = ({lastId}) => {
  return (
    <div className='orderMain'>    
      <h2 className='orderSuccess'>¡Tu compra se realizó con éxito!</h2>
      <div>Tu código de orden de compra es: {lastId}</div>
    </div>
  )
}

export default OrdenDeCompra