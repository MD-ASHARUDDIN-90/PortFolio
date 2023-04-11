import style from './Content.module.css'
import Resume from '../../Fixture/Resume_MD Asharuddin.pdf'
export default function Content() {
    return(
        <>
        <div className={style.mainBox}>
        <div className={style.main}>
        <h1 className={style.name}>MD Asharuddin</h1>
        <h2>Front-end Developer </h2>
        <div className={style.textWrap}>
        <p className={style.text}>I am passionate about using Javascript and React-JS to build a awesome User Interface.I am competent with HTML, CSS, JavaScript, React-JS.</p>
        <a href={Resume} download="MD_Asharuddin" target='blank'>
        <button className={style.navLink}>Download Resume</button>
        </a>
        </div>
        </div>
        <img className={style.image} loading="lazy" src="https://www.lambdatest.com/resources/images/news24.gif"  alt="codeingjag" />
        </div>
      
        </>
    )
}