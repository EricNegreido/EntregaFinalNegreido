import { Link } from "react-router-dom"
import {CartWidget} from "./CartWidget"

export const NavBar = () => 

<header> 
    <nav className="navBar">
        {<Link to={'/'}>
        <div className="logo">TODO AMBOS</div>
        </Link>}
        {<Link style={{className:'navButtons'}} to={'/categoria/mujeres'}> Mujeres</Link>}
        {<Link to={'/categoria/hombres'}> Hombres</Link>}
        {<Link to={'/categoria/unisex'}> UNISEX</Link>}
        <CartWidget/>
    </nav>

</header>