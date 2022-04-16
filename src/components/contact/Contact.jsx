import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Alert from '../alert/Alert';

const AlertType = {
  success: 'success',
  fail: 'fail',
};


const Contact = () => {

    const form = useRef();
    const alertRef = useRef(null);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_8knb2kh', 'template_ayxgfri', form.current, 'IwIzVlu-q4pdGmE07')
      alertRef.current.show();
      e.target.reset()

    };

  return (
    <section id="contact">

      <Alert ref={alertRef} message='Message Sent' type={AlertType.success}/>
      
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <HiOutlineMail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>guianalankem@gmail.com</h5>
            <a href='mailto:guianalankem@gmail.com'>Send a message</a>
          </article>

          <article className='contact-option'>
            <RiMessengerLine className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>Kem Guianalan</h5>
            <a href='https://m.me/guianalan.kem' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          
        </div>

        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
            
  )
}

export default Contact