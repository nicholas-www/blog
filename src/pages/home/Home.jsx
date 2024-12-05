import React from 'react'
import './Home.css'

// Images
import apple from '../../assets/assets/apple.png'
import watermelon from '../../assets/assets/watermelon.png'
import banana from '../../assets/assets/banana.png'
import orange from '../../assets/assets/orange.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPlay } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='container home'>
       
        <h1 className="logo">
            <span className='primary'>memory</span>
             <span className='secondary'>game</span>
        </h1>

        <div className="images">
            <img src={apple} alt="" />
            <img src={watermelon} alt="" />
            <img src={banana} alt="" />
            <img src={orange} alt="" />
        </div>

        <div className="buttons">
            <Link to={'/game'} className='btn btn-primary'>
            play <FontAwesomeIcon icon={faPlay} className='icon'/>
            </Link>

        </div>
    </div>
  )
}

export default Home