import React, {createContext, useState} from 'react'

export const CartContext = createContext();


export const CartProvider = ({children}) => {
    //useState del carrito
    const [cart, setCart] = useState([]);
    //useSataet de la cantidad de unidades de cada producto
    const [cant, setCant] = useState(0);
    //useState que maneja el precio total
    const [totalPrice, setTotalPrice] = useState(0)
    //useState que maneja el estado del carrito vacio/con productos
    const [cartIsEmpty, setCartIsEmpty] = useState(true);
    
    //función para agregar elementos al carrito
    const addItemToCart = (producto, count) => {
        
        const {id, nombre, precio, stock,imagen} = producto

    //asigno el counter al objeto product
    let itemWithQuantity = {id, nombre, precio, stock,imagen, cantidad:count}

        //funcion para evitar duplicados
        const isInCart = cart.some(item => item.id === id)
        
            isInCart ?
                setCart(cart.map(p =>{
                    return p.id === id 
                    ? {...p, cantidad: p.cantidad + count}
                    : p
                    
                }))

                : setCart( () => {
                    return cart.concat(itemWithQuantity)
                })
        //Sumamos la cantidad de elementos al useState de cantidad
        setCant(cant + count)
        //Sumamos el precio de los elementos al total
        setTotalPrice(totalPrice + (precio * count));
        //seteamos cartIsEmpty a false
        setCartIsEmpty(false);
               
    }

    //función para remover elementos
    const removeFromCart = (product) => {
        if (cart.length === 1) setCartIsEmpty(true);
        const remove = cart.findIndex(p => p.id === product.id)
        const totalItemPrice = (cart[remove].precio * cart[remove].cantidad)
            
            setTotalPrice(totalPrice - totalItemPrice)
            setCant(cant - cart[remove].cantidad)
            cart.splice(remove,1)
            setCart([...cart])
    }

    //función para limpiar el carrito
    function cleanCart() {
        setCart([])
        setCant(0)
        setTotalPrice(0)
        setCartIsEmpty(true)
    }

    return (
        <CartContext.Provider value={{
             cart,
             cant,
             totalPrice,
             cartIsEmpty,
             addItemToCart,
             removeFromCart,  
             cleanCart
             }}>
            {children}
        </CartContext.Provider>
    )
}