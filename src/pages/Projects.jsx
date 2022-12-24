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
import project10 from '../img/projects/project10.png'
import project11 from '../img/projects/project11.png'


const Projects = () => {
    return (
        <div className={style.container}>

            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project1} alt="Project" />
                    <a className={style.link} href="https://y-festivalmusicarock.netlify.app" target="_blank"> <h1>Rock & EDM Festival</h1> </a>
                    <p className={style.description} > HTML, scss, JavaScript </p>
                </div>
            </div>

            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project2} alt="Project" />
                    <a className={style.link} href="https://control-presupuestos-y.netlify.app" target="_blank"><h1>Control deGastos </h1></a>
                    <p className={style.description}> React and css</p>
                </div>
            </div>

            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project3} alt="Project" />
                    <a className={style.link} href="https://appveterinaria-prueba-y.netlify.app" target="_blank"><h1>Veterinary</h1> </a>
                    <p className={style.description}> React and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project4} alt="Project" />
                    <a className={style.link} href="https://cotizador-criptomonedas-y.netlify.app" target="_blank"><h1>Cotizador Criptomonedas</h1> </a>
                    <p className={style.description}> React and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project5} alt="Project" />
                    <a className={style.link} href="https://frontendstore-prueba02.netlify.app/" target="_blank"><h1>FRONTEND-STORE</h1> </a>
                    <p className={style.description}> HTML and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project6} alt="Project" />
                    <a className={style.link} href="https://blogdecafe-prueba01.netlify.app/" target="_blank"><h1>Blog de Cafe</h1> </a>
                    <p className={style.description}> HTML and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project7} alt="Project" />
                    <a className={style.link} href="https://y-html-practice.netlify.app/" target="_blank"><h1>FreeLancer</h1> </a>
                    <p className={style.description}> React and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project8} alt="Project" />
                    <a className={style.link} href="https://y-translator.netlify.app/" target="_blank"><h1>Traductor Universal</h1> </a>
                    <p className={style.description}> HTML and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project9} alt="Project" />
                    <a className={style.link} href="https://y-gifs.netlify.app/" target="_blank"><h1>Free-Gifs</h1> </a>
                    <p className={style.description}> HTML and css</p>
                </div>
            </div>

            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project10} alt="Project" />
                    <a className={style.link} href="https://y-gifs.netlify.app/" target="_blank"><h1>Food Comunity</h1> </a>
                    <p className={style.description}> HTML and css</p>
                </div>
            </div>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.image} src={project11} alt="Project" />
                    <a className={style.link} href="https://y-gifs.netlify.app/" target="_blank"><h1>Pomodoro + Trello</h1> </a>
                    <p className={style.description}> HTML and css</p>
                </div>
            </div>
        </div>
    )
}

export default Projects