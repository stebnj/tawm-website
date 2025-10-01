import React from 'react'
import logo from '../../assets/logosvg.svg'
import './Header.scss'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <header className='header'>
            <nav className='nav-bar'>
                <section className='nav-bar__heading-container'>
                   
                        <img
                        src ={logo}
                        className= 'nav-bar__heading'
                        />
                    <section className='nav-bar__lists-container'>
                        <ul className='nav-bar__lists'>
                            <li className='nav-bar__summary'>
                                Summary
                            </li>
                            <li className='nav-bar__exp'>
                                Experience
                            </li>
                            <li className='nav-bar__contact'>
                                Contact Me s
                            </li >
                        </ul>
                    </section>
                </section>
                
            </nav>
        </header>
    )
}