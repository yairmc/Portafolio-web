import React from 'react'
import style from '../styles/Skills.module.css'
import computer from '../img/skills/computer.png'
import soft from '../img/sskills/soft.png'

import android from '../img/skills/android.png'
import react from '../img/skills/atom.png'
import css from '../img/skills/css-3.png'
import html from '../img/skills/html-5.png'
import js from '../img/skills/js.png'
import node from '../img/skills/node-js.png'
import unity from '../img/skills/unity.png'
import git from '../img/skills/github.png'
import mysql from '../img/skills/mysql.png'
import posgress from '../img/skills/posgress.png'
import express from '../img/skills/express.png'
import sequelize from '../img/skills/sequelize.png'

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
            <div className={style.skillsContainer}>
                <div className={style.skillsName}>
                    <img src={computer} alt="computer" />
                    <h1>Tecnical skills</h1>
                </div>

                <div className={style.iconsContainer}>
                    <div className={style.icons}><img src={html} alt="html" /><h1>HTML</h1></div>
                    <div className={style.icons}><img src={js} alt="javascript" /><h1>JavaScript</h1></div>
                    <div className={style.icons}><img src={react} alt="react" /> <h1>React</h1></div>
                    <div className={style.icons}><img src={css} alt="css" /><h1>CSS</h1></div>
                    <div className={style.icons}><img src={unity} alt="unity" /><h1>Unity</h1></div>
                    <div className={style.icons}><img src={android} alt="android" /><h1>Android Studio</h1></div>
                </div>
                <div className={style.iconsContainer}>
                    <div className={style.icons}><img src={node} alt="node" /><h1>Node</h1></div>
                    <div className={style.icons}><img src={git} alt="node" /><h1>Git</h1></div>
                    <div className={style.icons}><img src={mysql} alt="node" /><h1>MySql</h1></div>
                    <div className={style.icons}><img src={posgress} alt="node" /><h1>Posgress</h1></div>
                    <div className={style.icons}><img src={express} alt="node" /><h1>Express</h1></div>
                    <div className={style.icons}><img src={sequelize} alt="node" /><h1>Sequelize</h1></div>
                </div>
            </div>

            <div className={style.skillsContainer}>
                <div className={style.skillsName}>
                    <img src={soft} alt="brain" />
                    <h1>Soft skills</h1>
                </div>

                <div className={style.iconsContainer}>
                    <div className={style.icons}><img src={attitude} alt="html" /><h1>Comunication</h1></div>
                    <div className={style.icons}><img src={audit} alt="javascript" /><h1>Flexibility</h1></div>
                    <div className={style.icons}><img src={bussinessmen} alt="react" /> <h1>Integrity</h1></div>
                    <div className={style.icons}><img src={collaboration} alt="css" /><h1>Positive Attitude</h1></div>

                </div>
                <div className={style.iconsContainer}>
                    <div className={style.icons}><img src={conversation} alt="unity" /><h1>Teamwork</h1></div>
                    <div className={style.icons}><img src={direction} alt="android" /><h1>Professionalism</h1></div>
                    <div className={style.icons}><img src={united} alt="node" /><h1>Attitude Wokr</h1></div>
                </div>

            </div>

        </div>


    )
}

export default Skills