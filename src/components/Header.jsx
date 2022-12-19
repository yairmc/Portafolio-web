import style from '../styles/Header.module.css'
import { Link } from 'react-router-dom'

const Tabs = () => {
    return (
        <div className={style.conteiner}>
            <div className={style.info}>
                <h1>Yair Martinez</h1>
                <h2>Front-end Developer</h2>
            </div>

            <div >
                <div className={style.icon}>
                    <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-smile" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <line x1="9" y1="10" x2="9.01" y2="10" />
                        <line x1="15" y1="10" x2="15.01" y2="10" />
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                    </svg> </Link>
                    <Link to="/whoiam"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-man" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="5" r="2" />
                        <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                    </svg> </Link>
                    <Link to="/softSkills" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
                    </svg> </Link>
                    <Link to="/projects" ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-files" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                        <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                    </svg></Link>
                </div>
                <div className={style.iconName}>
                    <h1>welcome</h1>
                    <h1>who i am</h1>
                    <h1>my skills</h1>
                    <h1>projects</h1>
                </div>
            </div>
        </div>

    )
}
export default Tabs