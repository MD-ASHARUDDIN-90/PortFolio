import NavBar from "../../Component/NavBar/NavBar";
import style from './Contact.module.css'
import { BsLinkedin , BsGithub} from 'react-icons/bs';
import { MdAttachEmail} from 'react-icons/md';

export default function Contact() {
    return(
        <>
        <div className={style.main}>
        <NavBar />
        <h2>Get in Touch</h2>
        <h3>Feel free to connect with me</h3>
    
        <a href='https://www.linkedin.com/in/md-asharuddin-16440314b/' target="blank"><BsLinkedin className={style.icon}/></a>
        <a href='https://github.com/MD-ASHARUDDIN-90' target="blank"><BsGithub className={style.icon}/></a>
        <a href='mailto:asharansari90@gmail.com' target="blank"><MdAttachEmail className={style.icon}/></a>
        
        
        </div>
        </>
    )
}