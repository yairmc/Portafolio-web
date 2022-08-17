import React from 'react'
import style from '../styles/Footer.module.css'
import logo from '../img/YLogo.png'

const Footer = () => {
  return (

    <div className={style.conteiner}>
      <img className={style.logo} src={logo} alt="logo" />
      <div>
              <h1 className={style.contact}>Contact to yair_mc@hotmail.com </h1>
              <h2 className={style.contact}>+52-6444206948</h2>
      </div>
    </div>
  )
}

export default Footer