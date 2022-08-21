import React from 'react'
import style from '../styles/Projects.module.css'

import project1 from '../img/projects/project1.png'
import project2 from '../img/projects/project2.png'
import project3 from '../img/projects/project3.png'
import project4 from '../img/projects/project4.png'
import project5 from '../img/projects/project5.png'
import project6 from '../img/projects/project6.png'


const Projects = () => {
    return (
            <div className={style.imagesContainer}>
                <div className={style.imagesContainerdiv}>
                    <img src={project1} alt="Project" />
                    <a href="https://y-festivalmusicarock.netlify.app"> <h1>Rock & EDM Festival</h1> </a>
                    <a href="https://github.com/yairmc/FestivalMusica.git">Click here for my Repository of this project</a>
                    <p>Elements: HTML, scss, JavaScript </p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project2} alt="Project" />
                    <a href="https://control-presupuestos-y.netlify.app"><h1>Control deGastos </h1></a>
                    <a href="https://github.com/yairmc/control_presupuesto.git">Click here for my Repository of this project</a>
                    <p>Elements: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project3} alt="Project" />
                    <a href="https://appveterinaria-prueba-y.netlify.app"><h1>Veterinary</h1> </a>
                    <a href="https://github.com/yairmc/citas_react.git">Click here for my Repository of this project</a>
                    <p>Element: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project4} alt="Project" />
                    <a href="https://cotizador-criptomonedas-y.netlify.app"><h1>Cotizador Criptomonedas</h1> </a>
                    <a href="https://github.com/yairmc/cotizadorcriptomonedas_react.git">Click here for my Repository of this project</a>
                    <p>Elements: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project5} alt="Project" />
                    <a href="https://frontendstore-prueba02.netlify.app/"><h1>FRONTEND-STORE</h1> </a>
                    <p>Elements: HTML and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project6} alt="Project" />
                    <a href="https://blogdecafe-prueba01.netlify.app/"><h1>Blog de Cafe</h1> </a>
                    <p>Elements: HTML and css</p>
                </div>

            </div>
    )
}

export default Projects