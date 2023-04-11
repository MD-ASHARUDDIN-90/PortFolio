import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import style from './About.module.css'

export default function About() {
  return (
    <>
      <NavBar />
      <div className={style.subMain}>
      <div className={style.about}>
        <h2>ABOUT ME</h2>
        <p>
          Hi Everyone, I am MD Asharuddin from West Bengal, India. I am Front-end
          Developer who loves to transform ideas into reality using code.
          Motivated designer and developer competent with ReactJs, JavaScript,
          HTML5, CSS3. Apart from coding, some other activities that I love to
          do!
        </p>
        <ul>
        <li>Playing Online Games</li>
        <li>Travelling</li>
        <li>Listening Music</li>
        <li>Watching Movies</li>
        </ul>
        </div>
        <div className={style.image}>
        <img className={style.imagePic} src="https://imgur.com/jEdtqEr.jpg" alt="profile pic"/>
        </div>
      </div>
    </>
  );
}
