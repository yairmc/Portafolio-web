import React from 'react'
import style from '../styles/Skills.module.css'
import computer from '../img/computer.png'
import brain from '../img/brain.png'

import android from '../img/skills/android.png'
import react from '../img/skills/atom.png'
import css from '../img/skills/css-3.png'
import html from '../img/skills/html-5.png'
import js from '../img/skills/js.png'
import node from '../img/skills/node-js.png'
import unity from '../img/skills/unity.png'
 import git from '../img/skills/github.png'

import attitude from '../img/sskills/attitude.png'
import audit from '../img/sskills/audit.png'
import bussinessmen from '../img/sskills/businessmen.png'
import collaboration from '../img/sskills/collaboration.png'
import conversation from '../img/sskills/conversation.png'
import direction from '../img/sskills/directions.png'
import united from '../img/sskills/united.png'

const Skills = () => {
    return (
        <div className={style.conteiner}>
            <div className={style.tecnical}>
                <div className={style.tecnicalInfo}>
                    <img src={computer} alt="computer" />
                    <h1>Tecnical skills</h1>
                </div>

                <div className={style.tskills}>
                    <div>
                        <div><img src={html} alt="html" /><h1>HTML</h1></div>
                        <div><img src={js} alt="javascript" /><h1>JavaScript</h1></div>
                        <div><img src={react} alt="react" /> <h1>React</h1></div>
                        <div><img src={css} alt="css" /><h1>CSS</h1></div>
                    </div>
                    <div>
                        <div><img src={unity} alt="unity" /><h1>Unity</h1></div>
                        <div><img src={android} alt="android" /><h1>Android Studio</h1></div>
                        <div><img src={node} alt="node" /><h1>Node</h1></div>
                        <div><img src={git} alt="node" /><h1>Git</h1></div>
                    </div>
                </div>

            </div>
            <div className={style.tecnical}>
                <div className={style.tecnicalInfo}>
                    <img src={brain} alt="brain" />
                    <h1>Soft skills</h1>
                </div>

                <div className={style.tskills}>
                    <div>
                        <div><img src={attitude} alt="html" /><h1>Comunication</h1></div>
                        <div><img src={audit} alt="javascript" /><h1>Flexibility</h1></div>
                        <div><img src={bussinessmen} alt="react" /> <h1>Integrity</h1></div>
                        <div><img src={collaboration} alt="css" /><h1>Positive Attitude</h1></div>

                    </div>
                    <div>
                        <div><img src={conversation} alt="unity" /><h1>Teamwork</h1></div>
                        <div><img src={direction} alt="android" /><h1>Professionalism</h1></div>
                        <div><img src={united} alt="node" /><h1>Attitude Wokr</h1></div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Skills