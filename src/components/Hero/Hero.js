import React from 'react'
import './Hero.scss'
import wheel from '../../assets/pictures/wheel.svg'
import college from '../../assets/pictures/college.svg'
import {useEffect, useState } from "react"

export default function Hero(){

    const [showSummary, setShowSummary] = useState(false);
    const [showLogos, setShowLogos] = useState(false)

    useEffect(() => {
        setShowSummary(true);

        const timer = setTimeout(() => {
            setShowLogos(true);
        }, 1800)

        return () => clearTimeout(timer)
    }, [])

    return(

        <main className='hero'>
            <div className={`hero__inner-container ${showSummary ? "fade-in" : ""}`}>
                <article className='hero__heading'>
                    <h1 className='hero__heading-text'>
                        Summary
                    </h1>
                </article>
                <article className='hero__paragraph'>
                    <p className='hero__paragraph-text'>
                        Detail oriented and creative Mechanical Designer with 6 years of experience in 3D modeling and mechanical design, primarily using SolidWorks and AutoCAD.
                        Known for delivering high quality, manufacturable designs with a strong focus on accuracy and efficiency. 
                        Born and raised in Southern California, I bring a strong work ethic and a collaborative mindset to every project. 
                        I excel in creating detailed 3D models and assemblies that meet both functional and aesthetic requirements. 
                        Always eager to learn and adapt, I'm committed to continuous growth, whether that's mastering new CAD tools or exploring innovative design approaches to improve product performance and development cycles.
                    </p>
                </article>
            </div>
            <section className='hero__image'>
                <img
                    className='hero__image-src'
                    src={wheel}
                />
            </section>

            <section className={`hero__logos ${showLogos ? "fade-in" : ""}`}>
                <img 
                className='hero__logos-college'
                src={college}
                />
            </section>
        </main>
    )
}