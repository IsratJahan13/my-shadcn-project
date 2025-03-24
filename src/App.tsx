import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import TablePage from "./pages/TablePage"
import CardsPage from "./pages/CardsPage"
import FormPage from "./pages/FormPage"
import HomePage from "./pages/HomePage"
import './index.css'
import Footer from "./components/Footer"

function App() {
  

  return (
    <>
      <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        
        <main className="flex-grow container mx-auto pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
