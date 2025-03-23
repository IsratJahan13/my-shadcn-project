import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div>
                <NavLink to="/table">
                    Table
                </NavLink>
                <NavLink to="/cards">
                    Cards
                </NavLink>
                <NavLink to="/form">
                    Form
                </NavLink>
            </div>
        </header>
    )
}
export default Navbar