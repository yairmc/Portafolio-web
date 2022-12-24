import React from 'react'
import style from '../styles/Welcome.module.css'
import yo from '../img/welcome/yairFormal.jpg'


const Welcome = () => {
  return (
    <main>
      <div className={style.card}>
        <div className={style.card_logo}>
          <h1>Ricardo Yair Martinez Vazquez</h1>
          <img src={yo} alt="imagen" className={style.img} />
          
          <p>
            Web developer expert in frontend and basic knowledge in backend and design.
            2 years of experience support me.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Welcome