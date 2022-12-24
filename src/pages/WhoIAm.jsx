import React from 'react'
import style from '../styles/WhoIAM.module.css'
import w1 from '../img/whoiam/w1.jpg'
import w2 from '../img/whoiam/w2.png'
import w3 from '../img/whoiam/w3.png'
import w4 from '../img/whoiam/w4.jpg'
import w5 from '../img/whoiam/w5.png'

const WhoIAm = () => {
  return (
    <div className={style.container}>

      <div className={style.imageCarrousel}>
        <ul>
          <li><img src={w1} alt="imagenPersonal" /></li>
          <li><img src={w2} alt="imagenPersonal" /></li>
          <li><img src={w3} alt="imagenPersonal" /></li>
          <li><img src={w4} alt="imagenPersonal" /></li>
          <li><img src={w5} alt="imagenPersonal" /></li>
        </ul>
      </div>

      <div className={style.personalInformation}>
        <h1>
          Hi, my name ir Ricardo Yair Martinez Vazquez, i've 27 years old, and I am a person who would love to be able to joins
          a company in which I can apply all my knowledge and, at the same time, that allows me to develop professionally.
          <br />
          <br />
          Thanks to my specialized training, I can add value and continue to develop professionally in a company that matches my values ​​and expectations.
          <br />
          <br />
          As an organized and highly motivated person, I am capable of adapting to any circumstance
          and always giving the best of myself in any situation, while at the same time making an effort to work as a team and foster fellowship.
          <br />
          <br />
          My main objective is to develop myself professionally and evolve in my sector, so I look for opportunities that allow me to do so, while trying to fully align myself with the company's objectives.
          <br />
          <br />
          I like to spend time practicing new technologies, learning and developing my skills in the area.        </h1>
      </div>

    </div>
  )
}

export default WhoIAm;