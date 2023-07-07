import { ItemCount } from "./ItemCount"
export const ItemDetail = ({item}) => {
    return<>
        <div>{item.producto}</div>
        <div>{item.categoria}</div>
        <div>{item.precio}</div>
        <ItemCount></ItemCount>
    </>
}