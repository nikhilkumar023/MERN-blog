//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Sign-in" element={<Signin />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

