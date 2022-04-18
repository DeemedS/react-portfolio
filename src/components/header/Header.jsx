import React from 'react'
import './header.css'
import CTA from './CTA'
import Pic from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Kem Guianalan</h1>
          <h5 className='text-light'>A Fullstack Developer</h5>
          <HeaderSocial />
          <div className='me'>
            <img src={Pic} alt="me" />
          </div>
          <CTA />
        </div>
    </header>
  )
}

export default Header