import React from 'react'
import './experience.css'
import cert from '../../assets/Frame316cert.jpg'
import { useState } from 'react'

const Experience = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal)
  }

  return (
    <section id="experience">
      <h5>Jobs I've Done</h5>
      <h2>My Experience</h2>

      <div className='container exp-container'>
        <div className='exp-card'>
          <h3>Frame 316</h3>
          <h4>Student Intern</h4>
          <h5 className='text-light'>Jun 2021 - Aug 2021</h5>
          <h5 className='text-light'>Singapore</h5>
         
          <button onClick={toggleModal} className='btn btn-primary'>View Certificate</button>

          {modal &&(
            <>
            <div className='modal'>
            <div className='overlay'></div>
            <div className='modal-content'>
            <img  className='cert-image-modal'src={cert} alt='certificate'/>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            </div>
            </div>
            </>
            )}
        </div>


      </div>


      
      
    </section>
  )
}

export default Experience