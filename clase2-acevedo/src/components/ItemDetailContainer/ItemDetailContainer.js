import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Data from '../Data.json'
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

const [producto, setProducto] = useState([])

const { productById } = useParams()

useEffect(() => {

  const getItems = new Promise ((resolve) => {
      setTimeout(() => {
          const productDetail = Data.find((products) => products.id === productById);
          
          resolve(productDetail);
      },1000)
  });
  getItems.then((res) =>{
    setProducto(res);
  })

}, [productById]);



  return (
    <ItemDetail producto={producto}/>
  )

}

export default ItemDetailContainer