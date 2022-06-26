import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import Data from '../Data.json'

export const ItemListContainer = (props) => {

  const [items, setItems] = useState([])

  useEffect(() => {
      const getItems = new Promise ((resolve) => {
          setTimeout(() => {                
              resolve(Data);
          },1000)
      });
      getItems.then((res) =>{
        setItems(res)
      })
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


