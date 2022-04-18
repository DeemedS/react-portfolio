import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
    <h5>Where I Study</h5>
    <h2>My Educational Attainment</h2>

    <div className='container education-container'>
        <div className='education-cards'>
            <article className='education-card'>
                <h3>College</h3>
                <h4>Diploma in Computer Engineering Technology</h4>
                <h5>Polytechnic University of the Philippines</h5>
                <small>June 2018 - May 2022</small>
            </article>

            <article className='education-card'>
                <h3>Senior High</h3>
                <h4>Accountancy Business and Management</h4>
                <h5>University of Caloocan City</h5>
                <small>June 2016 - May 2018</small>
            </article>
        </div>
    </div>
    </section>
  )
}

export default Education