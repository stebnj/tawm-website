import React from 'react'
import './Hero.scss'
import wheel from '../../assets/pictures/wheel.svg'
import college from '../../assets/pictures/college.svg'
import {useRef } from "react"
import {motion, useInView} from "framer-motion"



export default function Hero(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1.5,
                staggerChildren: 0.3 
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return(
        <main className='hero' ref={ref}>
            <motion.div 
                className='hero__inner-container'
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.article className='hero__heading' variants={itemVariants}>
                    <h1 className='hero__heading-text'>
                        Summary
                    </h1>
                </motion.article>
                <motion.article className='hero__paragraph' variants={itemVariants}>
                    <p className='hero__paragraph-text'>
                        Detail oriented and creative Mechanical Designer with 6 years of experience in 3D modeling and mechanical design, primarily using SolidWorks and AutoCAD.
                        Known for delivering high quality, manufacturable designs with a strong focus on accuracy and efficiency. 
                        Born and raised in Southern California, I bring a strong work ethic and a collaborative mindset to every project. 
                        I excel in creating detailed 3D models and assemblies that meet both functional and aesthetic requirements. 
                        Always eager to learn and adapt, I'm committed to continuous growth, whether that's mastering new CAD tools or exploring innovative design approaches to improve product performance and development cycles.
                    </p>    
                </motion.article>
            </motion.div>

            <motion.section 
                className='hero__image'
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <img
                    className='hero__image-src'
                    src={wheel}
                    alt="wheel"
                />
            </motion.section>

            <motion.section 
                className='hero__logos'
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <img 
                    className='hero__logos-college'
                    src={college}
                    alt="college logo"
                />
            </motion.section>
        </main>
    )
}