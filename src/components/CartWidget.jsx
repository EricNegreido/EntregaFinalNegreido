import { useState } from "react"
import carritoIcon from "../assets/carrito.png"
import {Carrito} from "./Carrito"

export const CartWidget = () => {
const [showCarrito, setShowCarrito] = useState(false);

const handleClick = () => {
    setShowCarrito(!showCarrito);
};

return (
    <div className="cart">
        <img
        className="navCarrito"
        src={carritoIcon}
        alt="carrito"
        onClick={handleClick}
        />
        <p>2</p>
        {showCarrito && <Carrito />}
    </div>
    );
};
