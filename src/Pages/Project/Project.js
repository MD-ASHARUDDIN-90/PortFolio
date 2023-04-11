import NavBar from "../../Component/NavBar/NavBar";
import style from './Project.module.css'
import {data} from '../../Fixture/Fixture'
import { BiLinkExternal } from 'react-icons/bi';
export default function Project() {
   
    return(
        <>
        <div className={style.main}>
        <NavBar/>
        <div className={style.mainContent}>
        <h2>Projects</h2>
        <div className={style.subMain}>
        {data.map((el,ind)=>
            <div className={style.tab} key={ind}>
            <h2>{el.name} <a href={el.link} target="blank"><BiLinkExternal className={style.icon}/></a></h2>
            <img className={style.image} src={el.img} alt="project" />
            
            </div>)}
        </div>
        </div>
        </div>
        </>
    )
}