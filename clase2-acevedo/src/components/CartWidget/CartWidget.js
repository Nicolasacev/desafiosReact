import React from "react";
import './CartWidgetStyle.css';
import IconoCartWidget from './IconoCartWidget.png'

export const CartWidget = () => {
  return (
    <div>
      <img src={IconoCartWidget} alt="carrito" className="iconoCarrito"></img>
    </div>
  );
}
