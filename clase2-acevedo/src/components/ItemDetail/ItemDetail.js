import React from 'react'
import './ItemDetail.css';
import { useParams } from 'react-router-dom'
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (productos) => {
  const { productById } = useParams()
console.log(productById);
  
  const findElem = (productos) => { 
    const elem = productos.find(e => e.id === productById)
    console.log(elem)
  }
          return (
            <div className='card'>
              <div className='imgContainer'>
                <img src={findElem.imagen} alt="repuesto"/> 
              </div>

              <div className='descriptionContainer'>
                <h1>{findElem.nombre}</h1>
                <p className='productPrice'> $ {findElem.precio}</p>
                <p>{findElem.descripcion}</p>
                <ItemCount/>
                <div>
                  <p className='warranty'>Las piezas electricas poseen una garantia de 6 meses</p>
                </div>
              </div>
            </div>
          );
        };
        

