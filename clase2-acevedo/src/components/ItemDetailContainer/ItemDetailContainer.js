import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

const [productos, setProductos] = useState([])

useEffect(() => {
  async function getItems() {
    const URL = 'http://localhost:3000/data/products.json' 
      await fetch(URL)
          .then( res => res.json() )
          .then( data => setProductos(data))
         console.log(productos)
  }
    getItems()

}, [productos])

  return (
    <ItemDetail item ={productos}/>
  )

}

export default ItemDetailContainer