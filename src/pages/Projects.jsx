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
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project1} alt="Project" />
                    <a href="https://y-festivalmusicarock.netlify.app" target="_blank"> <h1>Rock & EDM Festival</h1> </a>
                    <p> HTML, scss, JavaScript </p>
                </div>

            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project2} alt="Project" />
                    <a href="https://control-presupuestos-y.netlify.app" target="_blank"><h1>Control deGastos </h1></a>
                    <p> React and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project3} alt="Project" />
                    <a href="https://appveterinaria-prueba-y.netlify.app" target="_blank"><h1>Veterinary</h1> </a>
                    <p> React and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project4} alt="Project" />
                    <a href="https://cotizador-criptomonedas-y.netlify.app" target="_blank"><h1>Cotizador Criptomonedas</h1> </a>
                    <p> React and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project5} alt="Project" />
                    <a href="https://frontendstore-prueba02.netlify.app/" target="_blank"><h1>FRONTEND-STORE</h1> </a>
                    <p> HTML and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project6} alt="Project" />
                    <a href="https://blogdecafe-prueba01.netlify.app/" target="_blank"><h1>Blog de Cafe</h1> </a>
                    <p> HTML and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project7} alt="Project" />
                    <a href="https://y-html-practice.netlify.app/" target="_blank"><h1>FreeLancer</h1> </a>
                    <p> React and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project8} alt="Project" />
                    <a href="https://y-translator.netlify.app/" target="_blank"><h1>Traductor Universal</h1> </a>
                    <p> HTML and css</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.content}>
                    <img src={project9} alt="Project" />
                    <a href="https://y-gifs.netlify.app/" target="_blank"><h1>Free-Gifs</h1> </a>
                    <p> HTML and css</p>
                </div>
            </div>

        </div>
    )
}

export default Projects