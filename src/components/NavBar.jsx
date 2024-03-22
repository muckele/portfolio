import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
          <NavLink to='/'> Mathew Uckele </NavLink>
          <NavLink to='/home'> Home </NavLink>
          <NavLink to='/about'> About </NavLink>
          <NavLink to='/contact'> Contact </NavLink>
          <NavLink to='/projects'> Projects </NavLink>
          <NavLink to='/resume'> Resume </NavLink>
        </nav>
    )
}

export default NavBar