import React from 'react'
import logo from '../../assets/logosvg.svg'
import './Header.scss'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <header className='header'>
            <nav className='nav-bar'>
                <section className='nav-bar__heading-container'>
                    <Link to="/">
                        <img
                        src ={logo}
                        className= 'nav-bar__heading'
                        />
                    
                    </Link>
                       
                    <section className='nav-bar__lists-container'>
                        <ul className='nav-bar__lists'>
                            <Link to="/">  
                                <li className='nav-bar__summary'>
                                    Summary
                                </li>
                            </Link>
                            <Link to="/experience">
                                <li className='nav-bar__exp'>
                                    Experience
                                </li>
                            </Link>
                            <Link to='/contact'>     
                                <li className='nav-bar__contact'>
                                    Contact Me
                                </li >
                            </Link>
                       
                        </ul>
                    </section>
                </section>
            </nav>
        </header>
    )
}