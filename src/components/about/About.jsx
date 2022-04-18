import React from 'react'
import './about.css'
import pic from '../../assets/me-about.jpg'
import {CgWorkAlt} from 'react-icons/cg'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiNodejs} from 'react-icons/di'
import {DiPhp} from 'react-icons/di'
import {DiHtml5} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
import {AiOutlineProject} from 'react-icons/ai'
import {GiClassicalKnowledge} from 'react-icons/gi'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={pic} alt='aboutme' />
          </div>
        </div>

        <div className='about__content'>
            
          <p className='intro'>Graduating student of Diploma in Computer Engineering Technology passionate 
              about Software Development. Proficient in a range of modern technologies including 
              Python, C, Node.js, React, and java, has led multiple senior class projects to completion.
          </p>
          
          <a href='#contact' className='btn btn-primary'>Contact Me</a>

          <div className='about__cards'>
            
            <article className='about__card'>
              <CgWorkAlt className='about__icon' />
              <h5>Experience</h5>
              <small>3 months Student Internship</small>
            </article>

            <article className='about__card'>
              <GiClassicalKnowledge className='about__icon' />
              <h5>Techs Known</h5>
              <DiJavascript1 className='techicon'/>
              <DiReact className='techicon'/>
              <DiNodejs className='techicon'/>
              <DiPhp className='techicon'/>
              <DiHtml5 className='techicon'/>
              <SiMysql className='techicon'/>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>3 Web Applications</small>
            </article>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default About