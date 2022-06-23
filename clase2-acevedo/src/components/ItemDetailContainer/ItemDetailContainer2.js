import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = React.useState([])
    
    React.useEffect(() => {
      obtainData()
    },[])

    const obtainData = async () => {
        const data = await fetch ('data/products.json')
        const prod = await data.jason()
        setItem(prod)
    }

  return (
    <ItemDetail item ={item}/>
  )
}

export default ItemDetailContainer

