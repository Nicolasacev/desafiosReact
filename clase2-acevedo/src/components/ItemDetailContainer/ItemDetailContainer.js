import React, { useEffect, useState} from 'react'
import axios from "axios"
import { ItemDetail } from '../ItemDetail/ItemDetail';


 const ItemDetailContainer = () => {
      const [item, setItem] = useState([]);
    
      useEffect(() => {
        const getItems = () => {
          axios.get("http://localhost:3000/data/products.json")
            .then((response) => setItem(response.data.item));
console.log(item);
        };
        getItems();
      }, []);
console.log("hola 1");

      return (
        <ItemDetail item ={item}/>
      );
    };
 
    export default ItemDetailContainer
   
    
    