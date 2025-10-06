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
                            <Link to="/exp">  
                                <li className='nav-bar__summary'>
                                    Summary
                                </li>
                            </Link>
                          
                            <li className='nav-bar__exp'>
                                Experience
                            </li>
                            <li className='nav-bar__contact'>
                                Contact Me
                            </li >
                        </ul>
                    </section>
                </section>
            </nav>
        </header>
    )
}