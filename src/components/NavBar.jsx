import { NavLink } from "react-router-dom"
import logo from '../assets/portfolio-headshot.jpeg'

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
          <NavLink to='/resume'> Resume </NavLink>
        </nav>
    )
}

export default NavBar