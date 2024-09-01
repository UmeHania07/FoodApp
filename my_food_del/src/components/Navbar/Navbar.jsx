import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../image/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home")

  const {getCartAmountTotal} = useContext(StoreContext)
  return (

    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-manu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a >
        <a href='#footer' onClick={() => setMenu("contact us")} f className={menu === "contact us" ? "active" : ""}>Contact Us</a >
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          {/* agr cart mai kuch item h toh dot ki css show ho or agr cart empty h toh kuch bhi show na ho */}
          <div className={getCartAmountTotal() ===0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
