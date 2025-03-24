import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-gray-800">My ShadCN Project</h1>
        <div className="space-x-6">
          <NavLink
            to="/table"
            className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500')}
          >
            Table
          </NavLink>
          <NavLink
            to="/cards"
            className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500')}
          >
            Cards
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-500')}
          >
            Form
          </NavLink>
        </div>
      </nav>
    </header>
    )
}
export default Navbar