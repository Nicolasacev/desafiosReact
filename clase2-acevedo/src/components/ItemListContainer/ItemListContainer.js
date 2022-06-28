import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import Data from '../Data.json'
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {

  const [items, setItems] = useState([])
  const {familia} = useParams()
  
  useEffect(() => {
      const getItems = new Promise ((resolve) => {
          setTimeout(() => {                
              resolve(Data);
          },1000)
      });
      getItems.then((res) =>{
        if (familia) {
          const categoryFind = res.filter((element)=> element.familia.toLowerCase() === familia )
          setItems(categoryFind)
        }else{
          setItems(res)
        }       
      })
}, [familia])

  return (
      <div className="ItemListContainer">
        <h2 style={{textAlign:'center'}}>{props.gretting}</h2>
        <div className="Container">
          <ItemList items={items}/>
        </div>
      </div>
  );
}


