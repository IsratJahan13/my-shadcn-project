import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import TablePage from "./pages/TablePage"
import CardsPage from "./pages/CardsPage"
import FormPage from "./pages/FormPage"
import HomePage from "./pages/HomePage"
import './index.css'

function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold text-red-500">Hello, Tailwind!</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/cards" element={<CardsPage />}/>
          <Route path="/form" element={<FormPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
