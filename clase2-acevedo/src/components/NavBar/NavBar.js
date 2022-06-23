import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";
import { CategoryButton } from "./CategoryButton/CategoryButton";

export const NavBar = () => {

  return (
    <nav className="topnav">
      <div className="navList">
        <Link to="/" >Crash Parts</Link> 
        <Link to="/" >Productos</Link> 
        <CategoryButton/>
      </div>
      <CartWidget/>
    </nav>
  );
}


