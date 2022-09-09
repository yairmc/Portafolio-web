import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"

import Welcome from './pages/Welcome'
import WhoIAm from "./pages/WhoIAm"
import SoftSkills from "./pages/SoftSkills"
import Projects from "./pages/Projects"

import style from './App.module.css'




function App() {

  return (
      <div className={style.conteiner}>

        <div className={style.header}>
          <Header />
        </div>
        
        <div>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/whoiam" element={<WhoIAm />} />
              <Route path="/softSkills" element={<SoftSkills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>

        <div className={style.footer}>
          <Footer />
        </div>
      
      </div>
  )
}

export default App
