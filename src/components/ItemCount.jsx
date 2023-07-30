import { useState } from "react"

export const ItemCount = ({onAdd}) => {
    let [count, setCount] = useState(0);
    return <>
        <div>
            <button onClick={() => setCount(count => count - 1)}> - </button>
            <div> {count} </div>
            <button onClick={() => setCount(count = count + 1)}> + </button>            
        </div>
        <button onClick={() => onAdd(count)}> Agregar al carrito </button>
    </>
}