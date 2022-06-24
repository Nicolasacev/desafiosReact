import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';

export const ItemListContainer = (props) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3000/data/products.json')
      .then(resultado => resultado.json())
      .then(data => setItems(data))
    }, 2000);    
}, [])

  return (
      <div className="ItemListContainer">
        <h2 style={{textAlign:'center'}}>{props.gretting}</h2>
        <div className="Container">
          <ItemList items={items}/>
        </div>
      </div>
  );
}


