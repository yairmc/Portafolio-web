import React from 'react'
import style from '../styles/Welcome.module.css'
import yo from '../img/welcome/yairFormal.jpg'


const Welcome = () => {
  return (
    <main>
      <div className={style.card}>
        <div className={style.card_logo}>
          <img src={yo} alt="imagen" className={style.img} />
          <h1>Yair Martinez</h1>
          <article>
            Web developer expert in frontend and basic knowledge in backend and design.
            2 years of experience support me.
          </article>
        </div>
      </div>
    </main>
  )
}

export default Welcome