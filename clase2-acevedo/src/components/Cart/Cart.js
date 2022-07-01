import React, {useContext} from 'react'
import './Cart.css';
import { CartContext } from '../CartContext/CartContext';



export const Cart = () => {
  
  //Hook para traer las funciones del context
  const {cart} = useContext(CartContext);

  return (
     <div className='cartMainContainer'>
       <h1 className='cart'>Cart</h1>
     
        {cart.map(p => <div key={p.id}>
                        <p>{p.cantidad}</p>
                        <p>{p.nombre}</p>
                      </div>
                )}
      </div>
  )
}
