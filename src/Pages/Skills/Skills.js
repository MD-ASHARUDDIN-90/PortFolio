import NavBar from "../../Component/NavBar/NavBar";
import style from './Skills.module.css'
export default function Skills() {
    return(
        <>
        <NavBar/>
        <div className={style.main}>
        <div  className={style.text0}>HTML</div>
        <div  className={style.text1}>CSS</div>
        <div  className={style.text2}>JAVA-SCRIPT</div>
        <div  className={style.text3}>REACT-JS</div>
        <div  className={style.text0}>RECOIL-JS</div>
        <div  className={style.text1}>MATERIAL-UI</div>
        <div  className={style.text2}>GIT-HUB</div>
  </div>
        </>
    )
}