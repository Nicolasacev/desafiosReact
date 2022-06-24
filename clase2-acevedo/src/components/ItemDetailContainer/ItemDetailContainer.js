import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

const [producto, setProducto] = useState()

const { productById } = useParams()

useEffect(() => {
      getItems()
      console.log(producto);
    
}, [])

async function getItems() {
  const URL = "http://localhost:3000/data/products.json" 
    await fetch(URL)
        .then( res => res.json() )
        .then((data)=>{
          setProducto(data.filter(e => e.id === productById))
        })
}

  return (
    <ItemDetail producto = {producto}/>
  )

}

export default ItemDetailContainer