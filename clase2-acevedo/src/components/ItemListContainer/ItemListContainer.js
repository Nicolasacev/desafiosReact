import React from "react";
import './ItemListContainer.css';

export const ItemListContainer = (props) => {
  return (
      <div className="ItemListContainer">
        <h2 style={{textAlign:'center'}}>{props.gretting}</h2>
      </div>
  );
}


