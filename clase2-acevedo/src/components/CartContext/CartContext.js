import React, {createContext, useState} from 'react'

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cant, setCant] = useState(0);
    //console.log(cart);
    
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
        setCant(cant + count)
               
    }
    


    //función para remover elementos
    const removeFromCart = (product) => {

        const remove = cart.findIndex(p => p.id === product.id)

            setCant(cant - cart[remove].cantidad)
            cart.splice(remove,1)
            setCart([...cart])
    }


    //función para limpiar el carrito
    function cleanCart() {
        setCart([])
        setCant(0)
    }

    

    return (
        <CartContext.Provider value={{
             cart,
             cant,
             addItemToCart,
             removeFromCart,  
             cleanCart,
             }}>
            {children}
        </CartContext.Provider>
    )
}