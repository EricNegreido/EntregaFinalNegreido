import { ItemCount } from "./ItemCount"
import {CartContext} from "./context/CartContext"
import { useContext, useState } from "react"

export const ItemDetail = ({ item }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(0); // Estado para la cantidad seleccionada
    const { addItem } = useContext(CartContext); // Obtener la función addItem del contexto

    const onAdd = (cont) => {
      setSelectedQuantity(cont); // Actualizar la cantidad seleccionada
    };

    const handleAddToCart = () => {
      addItem(selectedQuantity, item); // Agregar el item al carrito con la cantidad seleccionada
      setSelectedQuantity(0); // Reiniciar la cantidad seleccionada después de agregar al carrito
    };

    return (
    <>
        <div>{item.producto}</div>
        <div>{item.categoria}</div>
        <div>{item.precio}</div>
        <ItemCount onAdd={onAdd}></ItemCount>
        {selectedQuantity > 0 && (
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        )}
    </>
    );
};