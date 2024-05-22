import { Link } from "react-router-dom"
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'

export function NavBar() {
    return (

        <div className="navbar">
           <div className="links">

            <Link to='/'> <div>Shop</div>
            </Link>

            <Link to='/cart'> <ShoppingCart size={32} /></Link>

           </div>
        </div>
    )
}