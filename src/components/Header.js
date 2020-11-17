import React, {useState} from 'react'
import MenuIcon from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import CloseIcon from './svg/times-solid.svg'
import {TiShoppingCart} from 'react-icons/ti'
import {FaTimes, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './css/Header.css'
export default function Header() {
  const [toggle, setToggle] = useState(false)


    return (
        <header>
            <div className="menu" onClick={() => setToggle(!toggle)}>
                {/* 
                 */}
                <FaBars size={30} color='blue' />

            </div>
            <div className="logo">
                <h1><Link to="/"> Nike </Link> </h1>
            </div>
            <nav>
                <ul className={toggle ? 'toggle' : ''}>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/"> Product </Link></li>
                    <li><Link to="/"> Contact  </Link></li>
                    <li><Link to="/"> About us </Link></li>
                    <li><Link to="/"> Login/Register </Link></li>
                    <li className="close" onClick={() => setToggle(!toggle)}>
                            <FaTimes size={30} color='blue' />
                        {/* <img src={CloseIcon} alt="" width="20" /> */}

                    </li>
                </ul>
                <div className="nav-cart">
                    <span>0</span>
                    <Link to="/cart" >
                    <TiShoppingCart size={30} color='blue' />
                        {/* <img src={CartIcon} alt="" width="20" /> */}
                    </Link>
                </div>
            </nav>
        </header>
    )
}
