import React from 'react'
import "./skills.css";
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Mes Compétences</span>
        <span className='skillDesc'>Je suis un futur développeur, actuellement en alternance chez Kapptivate, j'ai les fondamentaux dans plusieurs langages tels que : C, C++, Python, Java, HTLM/CSS, Javacript.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Développement Python</h2>
                    <p></p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Développement Web</h2>
                    <p></p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2></h2>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills