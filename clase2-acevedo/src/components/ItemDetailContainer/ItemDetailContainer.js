import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';


export const ItemDetailContainer = () => {

// Implementar mock invocando a getItem() y utilizando el resolver then

  const [item, setItem] = useState({})

useEffect(() => {

    const getItem = () => { 
    setTimeout(() => {
      fetch('products.json')
      .then(resultado => resultado.json())
      .then((data) => setItem(data[1]))
    }
    , 2000)};  
    console.log(item);
    getItem()  
}, [item])

  return (  
      <div className="ItemDetailContainer">
          <ItemDetail {...item}/>
      </div>
  );
}
