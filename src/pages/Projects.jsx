import React from 'react'
import style from '../styles/Projects.module.css'

import project1 from '../img/projects/project1.png'
import project2 from '../img/projects/project2.png'
import project3 from '../img/projects/project3.png'
import project4 from '../img/projects/project4.png'


const Projects = () => {
    return (
        <div className={style.conteiner}>
            <div className={style.imagesContainer}>
                <div>
                    <img src={project1} alt="Project" />
                    <a href="https://y-festivalmusicarock.netlify.app"> <h1>Rock & EDM Festival</h1> </a>
                    <a href="https://github.com/yairmc/FestivalMusica.git">Click here for my Repository of this project</a>
                    <p>This project is done in HTML with styles created in scss and JavaScript elements</p>
                </div>
                <div>
                    <img src={project2} alt="Project" />
                    <a href="https://control-presupuestos-y.netlify.app"><h1>Control deGastos </h1></a>
                    <a href="https://github.com/yairmc/control_presupuesto.git">Click here for my Repository of this project</a>
                    <p>This project is made in React using components with styles created in css</p>
                </div>
                <div>
                    <img src={project3} alt="Project" />
                    <a href="https://appveterinaria-prueba-y.netlify.app"><h1>Veterinary</h1> </a>
                    <a href="https://github.com/yairmc/citas_react.git">Click here for my Repository of this project</a>
                    <p>this project is made in React only using reagents within the same html sheet with styles created in css</p>
                </div>
                <div>
                    <img src={project4} alt="Project" />
                    <a href="https://cotizador-criptomonedas-y.netlify.app"><h1>Cotizador Criptomonedas</h1> </a>
                    <a href="https://github.com/yairmc/cotizadorcriptomonedas_react.git">Click here for my Repository of this project</a>
                    <p>This project is made in React using Hooks to consume APIs that provide real-time information on the stock market, with styles created in css</p>
                </div>

            </div>



        </div>
    )
}

export default Projects