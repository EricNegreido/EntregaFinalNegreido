import {
    createContext,
    useState
} from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children}) => {
    const [productArray, setProductArray] = useState([])
    const addItem = (cont, item) => {
        const productExist = productArray.some(product => product.id === item.id)
        if (productExist) {
            // Si el producto ya existe en el carrito, se muestra un mensaje de alerta
            alert("El producto ya está en el carrito.");

            // Actualizamos el array sumando la cantidad al producto existente
            const updatedProductArray = productArray.map(producto => {
                if (producto.id === item.id) {
                    return {
                        ...producto,
                        quantity: producto.quantity + cont
                    };
                }
                console.log(producto)
                console.log(productArray)
                return producto;
            });

            // Actualizamos el estado con el nuevo array que contiene la cantidad actualizada
            setProductArray(updatedProductArray);
        } else {
            // Si el producto no existe en el carrito, se agrega al array de productos
            setProductArray([...productArray, {
                ...item,
                quantity: cont
            }])
            console.log(item)
            console.log(productArray)

        }
    }
    const removeItem = (id) => {
        const newArray = productArray.filter(elem => elem.id !== id)
        setProductArray(newArray)
    }

    const clear = () => setProductArray([])

    return <CartContext.Provider value = {
            {
                productArray,
                addItem,
                removeItem,
                clear,
            }
        } > {
            children
        }

        </CartContext.Provider>

}