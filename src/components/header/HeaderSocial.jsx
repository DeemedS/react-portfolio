import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/kem-guianalan-46aa50123/' target='_blank'  rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/guianalankem' target='_blank'  rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial