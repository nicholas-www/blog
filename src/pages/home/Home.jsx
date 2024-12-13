import React from 'react'
import Hero from '../../components/hero/Hero'
import Posts from '../../components/posts/Posts'
import Authors from '../../components/authors/Authors'
import Join from '../../components/join/Join'

const Home = () => {
  return (
    <main>
      <div className="container">
        <Hero/>
        <Posts/>

        <div className="line"><div className="link"></div><div className="dark"></div><div className="primary"></div></div>
        
        <Authors/>
        <Join/>
      </div>
    </main>
  )
}

export default Home