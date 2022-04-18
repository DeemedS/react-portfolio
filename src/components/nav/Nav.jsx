import React from 'react'
import './nav.css'
import {RiHome4Line} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import {MdOutlineSchool} from 'react-icons/md'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><RiHome4Line /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#portfolio'onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></a>
      <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><MdOutlineSchool /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav