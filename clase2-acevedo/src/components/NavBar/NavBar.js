import React from "react";
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav class="topnav">
      <a class="active" href="#home">Crash Parts</a>
      <a href="#home">Home</a>
      <a href="#productos">Productos</a>
      <a href="#carrito">Carrito</a>
    </nav>
  );
}


