import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"

import WhoIAm from "./pages/WhoIAm"

import SoftSkills from "./pages/SoftSkills"
import Projects from "./pages/Projects"

import style from './App.module.css'



function App() {

  return (
      <div className={style.conteiner}>

        <div>
          <Header />
        </div>
        
        <div>
            <Routes>
              <Route path="/" element={<WhoIAm />} />
              <Route path="/softSkills" element={<SoftSkills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>

        <div>
          <Footer />
        </div>
      
      </div>
  )
}

export default App
