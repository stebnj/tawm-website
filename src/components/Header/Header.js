import React from 'react'
import logo from '../../assets/logosvg.svg'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'


export default function Header(){

    const navigate = useNavigate()

    const handleClick = (e, targetID, path) => {
        e.preventDefault();
        const element = document.getElementById(targetID);
        if(element){
            element.scrollIntoView({behavior: 'smooth', block: 'start'})
            navigate(path, { replace: true });
        }
    }


    return(
        <header className='header'>
            <nav className='nav-bar'>
                <section className='nav-bar__heading-container'>
                    <a href='/' onClick={(e) => handleClick(e, 'summary', '/')}>
                        <img
                        src ={logo}
                        className= 'nav-bar__heading'
                        />
                    </a>
                    
                    
                       
                    <section className='nav-bar__lists-container'>
                        <ul className='nav-bar__lists'>
                            <a href='/' onClick={(e) => handleClick(e, "summary",'/')}>
                                <li className='nav-bar__summary'>
                                    Summary
                                </li>
                            </a>
                            <a href='/experience' onClick={(e) => handleClick(e, "experience",'/experience')}>
                                <li className='nav-bar__exp'>
                                    Experience
                                </li>
                            </a>
                            <a href='/contact' onClick={(e) => handleClick(e, "contact",'/contact')}>    
                                <li className='nav-bar__contact'>
                                    Contact Me
                                </li >
                            </a>
                       
                        </ul>
                    </section>
                </section>
            </nav>
        </header>
    )
}