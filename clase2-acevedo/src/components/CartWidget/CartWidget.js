import React from "react";
import './CartWidgetStyle.css';
import IconoCartWidget from './IconoCartWidget.png'
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <img src={IconoCartWidget} alt="carrito" className="iconoCarrito"></img>
      </Link> 
    </div>
  );
}
