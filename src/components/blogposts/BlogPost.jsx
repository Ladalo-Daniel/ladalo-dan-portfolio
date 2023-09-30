import React from 'react'
import "./blogpost.css"
import blogimg from "../../../src/img/blog1.png"

export default function BlogPost() {
  return (
    <section className='blogpost__Wrapper'>
      <div className='featured__wrapper'>
            <h1>Featured Blogs</h1>
            <span>Featured handcrafted articles about my thoughts and experiments.</span>
      </div>
      <article className="blogpost__container">
        <div className="blogpost">
            <img src={blogimg} alt="" className="blogpost__img" />
            <div className="blogpost__content">
                <div className="blogpost__heading__container">
                    <p>Writting good codes</p>
                    <p>August 23, 2023</p>
                </div>
                <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page</p>
            </div>
        </div>
        <div className="blogpost">
            <img src={blogimg} alt="" className="blogpost__img" />
            <div className="blogpost__content">
                <div className="blogpost__heading__container">
                    <p>Writting good codes</p>
                    <p>August 23, 2023</p>
                </div>
                <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page</p>
            </div>
        </div>
        <div className="blogpost">
            <img src={blogimg} alt="" className="blogpost__img" />
            <div className="blogpost__content">
                <div className="blogpost__heading__container">
                    <p>Writting good codes</p>
                    <p>August 23, 2023</p>
                </div>
                <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page</p>
            </div>
        </div>
        <div className="blogpost">
            <img src={blogimg} alt="" className="blogpost__img" />
            <div className="blogpost__content">
                <div className="blogpost__heading__container">
                    <p>Writting good codes</p>
                    <p>August 23, 2023</p>
                </div>
                <p>Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page</p>
            </div>
        </div>
      </article>
    </section>
  )
}
