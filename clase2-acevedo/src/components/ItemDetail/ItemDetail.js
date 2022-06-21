import React from 'react'
import './ItemDetail.css';
import { ItemCount } from "../ItemCount/ItemCount";


export const ItemDetail = ({imagen, nombre, descripcion, precio}) => {

          return (
            <div className='card'>
              <div className='imgContainer'>
                <img src={imagen} alt="repuesto"/> 
              </div>

              <div className='descriptionContainer'>
                <h1>{nombre}</h1>
                <p className='productPrice'> $ {precio}</p>
                <p>{descripcion}</p>
                <ItemCount/>
                <div>
                  <p className='warranty'>Las piezas electricas poseen una garantia de 6 meses</p>
                </div>
              </div>
            </div>
          );
        };
        

