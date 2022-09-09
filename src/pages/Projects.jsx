import React from 'react'
import style from '../styles/Projects.module.css'

import project1 from '../img/projects/project1.png'
import project2 from '../img/projects/project2.png'
import project3 from '../img/projects/project3.png'
import project4 from '../img/projects/project4.png'
import project5 from '../img/projects/project5.png'
import project6 from '../img/projects/project6.png'
import project7 from '../img/projects/project7.png'
import project8 from '../img/projects/project8.png'
import project9 from '../img/projects/project9.png'


const Projects = () => {
    return (
            <div className={style.imagesContainer}>
                <div className={style.imagesContainerdiv}>
                    <img src={project1} alt="Project" />
                    <a href="https://y-festivalmusicarock.netlify.app" target="_blank"> <h1>Rock & EDM Festival</h1> </a>
                    <a href="https://github.com/yairmc/FestivalMusica.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Elements: HTML, scss, JavaScript </p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project2} alt="Project" />
                    <a href="https://control-presupuestos-y.netlify.app" target="_blank"><h1>Control deGastos </h1></a>
                    <a href="https://github.com/yairmc/control_presupuesto.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Elements: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project3} alt="Project" />
                    <a href="https://appveterinaria-prueba-y.netlify.app" target="_blank"><h1>Veterinary</h1> </a>
                    <a href="https://github.com/yairmc/citas_react.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Element: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project4} alt="Project" />
                    <a href="https://cotizador-criptomonedas-y.netlify.app" target="_blank"><h1>Cotizador Criptomonedas</h1> </a>
                    <a href="https://github.com/yairmc/cotizadorcriptomonedas_react.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Elements: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project5} alt="Project" />
                    <a href="https://frontendstore-prueba02.netlify.app/" target="_blank"><h1>FRONTEND-STORE</h1> </a>
                    <p>Elements: HTML and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project6} alt="Project" />
                    <a href="https://blogdecafe-prueba01.netlify.app/" target="_blank"><h1>Blog de Cafe</h1> </a>
                    <p>Elements: HTML and css</p>
                </div>

                <div className={style.imagesContainerdiv}>
                    <img src={project7} alt="Project" />
                    <a href="https://y-html-practice.netlify.app/" target="_blank"><h1>FreeLancer</h1> </a>
                    <a href="https://github.com/yairmc/primerProyectoHTML.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Elements: React and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project8} alt="Project" />
                    <a href="https://y-translator.netlify.app/" target="_blank"><h1>Traductor Universal</h1> </a>
                    <a href="https://github.com/yairmc/Translator.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Elements: HTML and css</p>
                </div>
                <div className={style.imagesContainerdiv}>
                    <img src={project9} alt="Project" />
                    <a href="https://y-gifs.netlify.app/" target="_blank"><h1>Free-Gifs</h1> </a>
                    <a href="https://github.com/yairmc/Gifs.git" target="_blank">Click here for my Repository of this project</a>
                    <p>Elements: HTML and css</p>
                </div>

            </div>
    )
}

export default Projects