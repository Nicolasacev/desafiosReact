import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

const { productById } = useParams()
const [item, setItem] = useState([])


 useEffect( () => {

  fetch ('http://localhost:3000/data/products.json')
        .then(res => res.json())
        .then(data => setItem(data))
      
    })
    const prod = item.find(e => e.id === productById)
    console.log(item)
    console.log(productById);
    
    console.log(prod);


  return (
    <ItemDetail item ={item}/>
  )
}

export default ItemDetailContainer