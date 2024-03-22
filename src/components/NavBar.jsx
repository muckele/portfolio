import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink to='/'>
                Mathew Uckele
            </NavLink>

            <ul>
                <li>
                    <NavLink
                        to='/home'
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/about'
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                    >
                        Contact
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/projects'
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/resume'
                    >
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar