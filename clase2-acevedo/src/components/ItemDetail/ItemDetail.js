import React from 'react'
import './ItemDetail.css';
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail = ({producto}) => {

          return (
            <div className='DetailCard'>
              <div className='imgDetailContainer'>
                <img src={producto.imagen} alt="repuesto"/> 
              </div>

              <div className='descriptionContainer'>
                <h1>{producto.nombre}</h1>
                <p className='productPrice'> $ {producto.precio}</p>
                <p>{producto.descripcion}</p>
                <ItemCount stock={producto.stock}/>
                <div>
                  <p className='warranty'>Las piezas electricas poseen una garantia de 6 meses</p>
                </div>
              </div>
            </div>
          );
        };
        

