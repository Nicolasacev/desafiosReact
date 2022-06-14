import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemListContainer.css';

export const ItemListContainer = (props) => {
  return (
      <div className="ItemListContainer">
        <h2 style={{textAlign:'center'}}>{props.gretting}</h2>
        <div className="Container">
          <ItemCount/>
        </div>
      </div>
  );
}


