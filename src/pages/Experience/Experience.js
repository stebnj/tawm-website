import React from "react";
import './Experience.scss'
import {motion} from 'framer-motion'


export default function Experience(){
    return(
        <motion.main
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8 }}>


                <h1>
                    ipsem lorem
                </h1>

        </motion.main>
        
    )
}