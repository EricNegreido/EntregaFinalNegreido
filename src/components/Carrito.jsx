import React, { useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";

export const Carrito = () => {
const { productArray, removeItem, clear } = useContext(CartContext);
useEffect(() => {
    console.log("productArray:", productArray);
}, [productArray]);

const handleRemoveItem = (itemId) => {
    removeItem(itemId); // Llamada a la función removeItem del contexto
};

const handleClearCart = () => {
    clear(); // Llamada a la función clear del contexto
};

return (
    <div>
    <h2>Carrito de compras</h2>
    {productArray.length === 0 ? (
    <p>No hay productos en el carrito</p>
    ) : (
        <ul>
            {productArray.map((product) => (
                <li key={product.id}>
                <p>Producto: {product.producto}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.precio}</p>
                <button onClick={() => handleRemoveItem(product.id)}>
                Eliminar
                </button>
                </li>
                ))}
        </ul>
        )}
        <button onClick={handleClearCart}>Vaciar carrito</button>
    </div>
)   ;
};
