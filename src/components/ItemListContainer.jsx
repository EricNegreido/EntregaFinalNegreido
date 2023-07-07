import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import data from "../MOCK_DATA.json"
import { useParams } from "react-router-dom";



export const ItemListContainer = (props) => {

    const [ropa, setRopa] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        })
        promise.then(data => {
            if(id){
                setRopa(
                    data.filter(ropa => ropa.categoria === id)
                )
            }else{
                setRopa(data)
            }
        })
    }, [id]) 
    return<>
    <div style={{background:'#f2f2f2', padding:'10px', borderRadius:'10px', width:'50%', margin:'5px auto', textAlign:'center'}}>
        <p style={{color:'#000', fontSize:"20px"}}> {props.greeting} </p>
        {ropa.length === 0 ? (<div> LOADING... </div>
        ): <ItemList ropa = {ropa}/> 
        }
    </div>
</>
}
