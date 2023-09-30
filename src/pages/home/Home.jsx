import React, { useContext } from 'react'
import "./home.css"
import lad from "../../../src/img/lad5.jpeg"
import code from "../../../src/img/blog1.png"
import code2 from "../../../src/img/y3.png"
// import Sidebar from '../../components/sidebar/Sidebar'
// import Rightbar from '../../components/rightbar/Rightbar'
import { AppContext } from '../../context/AppContext'
import BlogPost from '../../components/blogposts/BlogPost'

export default function Home() {
  const {menuClick} = useContext(AppContext)
  return (
    <section className={ menuClick ? "menuclick__resize" : "home" }>
        <div className='home__content__container'>
          <div className="home__img">
            <img src={lad} alt="" className="img" />
            <h2>I'm Ladalo B. Daniel</h2>
            <h4>Frontend Developer</h4>
            <h5>Based in Abuja</h5>
          </div>
          <div className="home__content">
            <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.</p>
            <img src={code2} alt="" />
          </div>
        </div>
        <article>
          <BlogPost />
        </article>
    </section>
  )
}
