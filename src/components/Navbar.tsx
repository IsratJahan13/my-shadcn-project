import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="p-4">
            <nav className="flex justify-between">
            <div className="space-x-6">
                <NavLink to="/table" className={({isActive}) => (isActive? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500')}>
                    Table
                </NavLink>
                <NavLink to="/cards">
                    Cards
                </NavLink>
                <NavLink to="/form">
                    Form
                </NavLink>
            </div>
            </nav>
        </header>
    )
}
export default Navbar