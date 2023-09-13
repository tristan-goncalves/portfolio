import React from 'react'
import "./skills.css";
import DEVPython from "../../assets/python-logo.png"
import DEVWeb from "../../assets/html-css-logo.png"
import CyberSecuriy from "../../assets/cybersecurite-logo.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>Mes Compétences</span>
        <span className='skillDesc'>Je suis un futur développeur, actuellement en alternance chez Kapptivate, j'ai les fondamentaux dans plusieurs langages tels que : C, C++, Python, Java, HTLM/CSS, Javacript.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={DEVPython} alt="DEVPython" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Développement Python</h2>
                    <p>J'ai plusieurs expériences en développement Python, nottament une application qui consistait à analyser du code C++ à l'aide de Python afin de pouvoir corriger automatiquement des codes d'étudiants débutants.</p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={DEVWeb} alt="DEVWeb" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Développement Web</h2>
                    <p>J'ai participé à la création d'un site de recherches de mangas. Plus précisément à la page vitrine qui mettait en valeur plusieurs mangas afin de donner envie à l'utilisateur d'en savoir plus sur nos services.</p>
                </div>
            </div>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={CyberSecuriy} alt="CyberSecuriy" className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Cybersécurité</h2>
                    <p>Je suis actuellement en Bachelor 3ème année en Cybersécurité. Je commence à me faire la main dès maintenant avec ce portfolio.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills