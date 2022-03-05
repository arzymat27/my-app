import React from "react";
import { NavLink } from "react-router-dom";
import n from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div className={n.item}>
        <NavLink to="/profile" >Profile</NavLink>
      </div>
      <div className={n.item}>
        <NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink>
      </div>
      <div className={n.item}>
        <a>News</a>
      </div>
      <div className={n.item}>
        <a>Music</a>
      </div>
      <div className={n.item}>
        <a>Settings</a>
      </div>
    </nav>
  )
}
        export default Navbar;