import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="topnav">
      <div>
        <a className="active" href="#home">Crash Parts</a>
        <a href="#home">Home</a>
        <a href="#productos">Productos</a>
      </div>
      <CartWidget/>
    </nav>
  );
}


