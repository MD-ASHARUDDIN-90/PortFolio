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
        <img className={style.imagePic} src="https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966" alt="profile pic"/>
        </div>
      </div>
    </>
  );
}
