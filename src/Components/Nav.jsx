import React from 'react'
import { Link, NavLink,useLocation } from 'react-router-dom'

const Nav = () => {
    const location = useLocation();
  return (
     
    location.pathname!=='/sign-out' && ( 
          <div id="topmenu" style={{ display: "flex", flexDirection: "row", background: "#041C2C", color: "white", alignItems: "center" }}>
              <div><Link to={'/'}><img src="logo.png" style={{ width: '150px' }} /></Link></div>
              <div>Hello Søren List, CRM Nordic</div>
              <div style={{ flexGrow: 1 }}></div>
              <div><NavLink to="/units-in-stocks">Units In Stock</NavLink></div>
              <div><NavLink to="/videos">Videoes</NavLink></div>
              <div><NavLink to="/e-learning">E-learning</NavLink></div>
              <div><NavLink to={"/tickets"} style={{ color: "orange" }}>Tickets</NavLink></div>
              <div><NavLink to={"/units"}>Units</NavLink></div>
              <div><NavLink to="/users">Users</NavLink></div>
              <div><NavLink to="/sign-out">Sign out</NavLink></div>
          </div>
    )
  )
}

export default Nav