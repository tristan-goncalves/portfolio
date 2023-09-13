import React from 'react'
import './intro.css'
import backgroundImage from '../../assets/imageTristan.png'
import {Link} from "react-scroll"
import btnImage from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='bonjour'>Bonjour.</span>
            <span className='introText'>Je suis <span className='introName'>Tristan.</span> <br />Alternant Développeur</span>
            <p className='introPara'>Je suis un alternant dans le domaine de l'informatique<br /> et étudiant à l'EFREI Bordeaux.</p>
            <Link><button className='btn'><img src={btnImage} alt='Embauchez-moi' className='btnImg'></img>Embauchez-moi</button></Link>
        </div>
        <img src= {backgroundImage} className='backgroundImage'></img>
    </section>
  )
}

export default Intro