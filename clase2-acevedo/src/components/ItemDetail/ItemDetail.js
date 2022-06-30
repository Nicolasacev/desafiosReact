import React, { useState } from 'react'
import './ItemDetail.css';
import { ItemCount } from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom'


export const ItemDetail = ({producto}) => {

 const [added, setAdded] = useState(false)

 //CUANDO DE EJECUTA ADDTOCART RECIBIMOS EL PRODUCTO Y LA CANTIDAD QUE SE SELECCIONÓ
  const addToCart = (producto, count) => {
    console.log(producto);
    console.log(count);
    setAdded(true)
  }
          return (
            <div className='DetailCard'>
              <div className='imgDetailContainer'>
                <img src={producto.imagen} alt="repuesto"/> 
              </div>

              <div className='descriptionContainer'>
                <h1>{producto.nombre}</h1>
                <p className='productPrice'> $ {producto.precio}</p>
                <p>{producto.descripcion}</p>
                { !added && 
                <ItemCount producto={producto} addToCart={addToCart}/>
                }
                { added &&
                <>
                <Link to="/cart" className='buttonCart1'>
                  Ir al carrito          
                </Link>
                <Link to="/" className='buttonCart1'>
                  Seguir comprando          
                </Link>
                </>
                }

                <div>
                  <p className='warranty'>Las piezas electricas poseen una garantia de 6 meses</p>
                </div>
              </div>
            </div>
          );
        };
        

