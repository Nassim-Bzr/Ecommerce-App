import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='whoarewe'>
        <h1> Qui sommes-nous ?</h1>
        <Link className='link-whoarewe' to='/qui-sommes-nous'>
          Notre histoire
        </Link>
        <Link className='link-whoarewe' to='/qui-sommes-nous'>
          Notre éthique
        </Link>
        <Link className='link-whoarewe' to='/qui-sommes-nous'>
          L'équipe
        </Link>
      </div>



    </div>
  )
}
