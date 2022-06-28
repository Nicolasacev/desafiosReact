import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Cart } from "../Cart/Cart"
import { Footer } from "../Footer/Footer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { NavBar } from "../NavBar/NavBar"

export const AppRouting = () =>{
return( 
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>  
            <Route path="/category/:familia" element={<ItemListContainer/>}/>
            <Route path="/item/:productById" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>  
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}