import './App.css'
import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Slider from "./Components/LandingPage/Slider"
import Products from "./Pages/Products"
import Logger from "./Components/Logger/Logger"
import Contact from "./Components/Contact/Contact"
import Favorites from  "./Components/Favorites/Favorites"

function App() {

  return (
    <div className="app">
      
      <Navbar />

      <Slider />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />

      <Logger />
    
    </div>
  )
}

export default App
