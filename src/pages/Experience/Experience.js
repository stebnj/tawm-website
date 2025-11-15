import React from "react";
import './Experience.scss'
import egad from "../../assets/egad.svg"



export default function Experience(){
    return(
        <main>
         <section className="exp__title">
            <h1 className="exp__title-text">
              Experience
            </h1>
         </section>
         <section className="exp__egad">
            <a href="https://egads.com/" className="exp__egad-link">
              <img 
                src= {egad}
                className="exp__egad-img"
              /> 
            </a>
      
          <p>
            
          </p>
         </section>
        </main>
        
        
    )
}