import style from '../styles/Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../img/YLogo.png'
import iconoIAM from '../img/boy.png'
import iconoSkill from '../img/skills.png'
import iconoProjects from '../img/task.png'
const Tabs = () => {
    return (
        <div className={style.conteiner}>
            <div className={style.presentation}>
                <img className={style.logo} src={logo} alt="logo" />
                <div className={style.info}>
                    <h1>Yair Martinez</h1>
                    <h2>Front-end Developer</h2>
                </div>
            </div>

            <div className={style.options}>
                <div className={style.icon}>
                    <Link to="/"><img src={iconoIAM} alt="icono" /> </Link>
                    <Link to="/softSkills" ><img src={iconoSkill} alt="icono" /> </Link>
                    <Link to="/projects" ><img src={iconoProjects} alt="icono" /> </Link>
                </div>
                <div className={style.iconName}>
                    <h1>who i am</h1>
                    <h1>my skills</h1>
                    <h1>projects</h1>
                </div>

            </div>

        </div>

    )
}
export default Tabs