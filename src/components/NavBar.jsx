import { NavLink } from "react-router-dom"
import logo from '../assets/portfolio-headshot.jpeg'
import '../assets/css/NavBar.css'

function NavBar() {
    return (
        <nav>
          <NavLink to='/'> 
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span className="navbar-name">Mathew Uckele</span> 
          </NavLink>
          <NavLink to='/about'> About </NavLink>
          <NavLink to='/contact'> Contact </NavLink>
          <NavLink to='/projects'> Projects </NavLink>
        </nav>
    )
}

export default NavBar