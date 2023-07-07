import { Item } from "./Item"

export const ItemList = ({ropa}) => 
    ropa.map(stock =><Item key={stock.id} stock={stock}/>)