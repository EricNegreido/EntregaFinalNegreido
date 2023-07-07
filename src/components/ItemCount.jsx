import { useState } from "react"

export const ItemCount = (props) => {
    let [Count, setCount] = useState(0);
    return <>
        <div>
            <span onClick={() => setCount(Count => Count - 1)}> - </span>
            <div> {Count} </div>
            <span onClick={() => setCount(Count = Count + 1)}> + </span>            
        </div>
        <button> Agregar al carrito </button>
    </>
}