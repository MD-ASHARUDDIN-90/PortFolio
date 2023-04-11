import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return(
        <>
        <nav className={style.nav} >
        <Link className={style.link} to='/'>HOME</Link>
        <Link className={style.link} to='/about'>ABOUT</Link>
        <Link className={style.link} to='/project'>PROJECT</Link>
        <Link className={style.link} to='/skills'>SKILLS</Link>
        <Link className={style.link} to='/contact'>CONTACT-ME</Link>
        
        </nav>
        </>
    )
}