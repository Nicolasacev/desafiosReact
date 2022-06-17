import React, { useState } from "react";
import './ItemCountStyle.css';

export const ItemCount = ({ stock = 5, initial = 1}) => {
    const [count, setCount] = useState(initial);

    const onAdd = () => { 
        if (count < stock) {
          setCount(count + 1);
        }
    }
    const onSubs = () => { 
        if (count > 1) {
            setCount(count - 1);
        }
    }

  return (
    <div className="ItemCountContainer">
        <div>
            <button  className="button button3" onClick={onSubs}>-</button>
            <span>{count}</span>
            <button  className="button button1" onClick={onAdd}>+</button>
        </div>
        <div>
            <button className="button" >Agregar al carrito</button>
        </div>
    </div>
  )
}
