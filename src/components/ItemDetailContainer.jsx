import { useEffect, useState } from "react";
import data from "../MOCK_DATA.json"
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () =>{

    const [item, setItem] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
        promise.then(data => {
            setItem(data[1])
        })
    }, []) 
    return<>
    <div>
        <p style={{color:'#000', fontSize:"20px"}}> DETALLE</p>
        {item.length === 0 ? (<div> LOADING... </div>
        ): <ItemDetail item = {item}/> 
        }
    </div>
</>
}