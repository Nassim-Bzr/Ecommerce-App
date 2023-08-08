import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import Accueil from '../../Assets/accueil.png'

export default function Header() {
    return (
        <>
            <div className='navbar-header'>
                
            <ul className='list-linkheader'>

            <li className='link-header'>
                        <Link className='link-accueil'>
                            <img className='logo-accueil' src={Accueil} alt="Accueil" />
                        </Link>
                    </li>
                <li className='link-header'>
                    <Link className='link-headerr'>
                        NOS MIELS
                    </Link>
                </li>
                <li className='link-header'>
                <Link className='link-headerr'>
                        GOURMANDISES
                    </Link>
                </li> <li className='link-header'>
                <Link className='link-headerr'>
                      QUI SOMME-NOUS ?
                    </Link>
                </li> <li className='link-header'>
                <Link className='link-headerr'>
                       CONTACT
                    </Link>
                </li>

            </ul>
            </div>
        </>
    )
}
