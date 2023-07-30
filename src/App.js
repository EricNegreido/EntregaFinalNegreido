import {NavBar} from "./components/NavBar"
import {ItemListContainer} from "./components/ItemListContainer"
import { Route, Routes } from "react-router-dom"
import{ItemDetailContainer} from "./components/ItemDetailContainer"

function App() {
  return <>
  
    <NavBar/>
    <Routes>
      <Route 
      path="/" 
      element={<ItemListContainer greeting ="Hola bienvendios a mi tienda de ropa"/>}
      />
      <Route 
      path="/categoria/:id" 
      element={<ItemListContainer greeting ="ROPA HOMBRES" category="hombres"/>}
      />
      <Route 
      path="/categoria/:id" 
      element={<ItemListContainer greeting ="ROPA MUJERES" category="mujeres" />}
      />
      <Route 
      path="/categoria/:id" 
      element={<ItemListContainer greeting ="COMBOS" category="unisex"/>}
      />
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
  </>
}

export default App;
