import NavBar from "../../Component/NavBar/NavBar";
import style from './Skills.module.css'
export default function Skills() {
    return(
        <>
        <div className={style.box}>
        <NavBar/>
        <div className={style.main}>
        <div  className={style.text0}>HTML</div>
        <div  className={style.text1}>CSS</div>
        <div  className={style.text0}>JAVA-SCRIPT</div>
        <div  className={style.text1}>REACT-JS</div>
        <div  className={style.text0}>RECOIL-JS</div>
        <div  className={style.text1}>MATERIAL-UI</div>
        <div  className={style.text0}>GIT-HUB</div>
  </div>
  </div>
 
        </>
    )
}