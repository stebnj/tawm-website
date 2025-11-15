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
      
          <p className="exp__egad-text">
            In addition to performing my core responsibilities at a high level, I delivered several key accomplishments during my time at EGADS.
             I standardized and formalized the company’s manufacturing drawing requirements, improving accuracy and reducing revision errors across projects. 
             I consistently produced 4–5 custom signs per month while meeting tight deadlines and maintaining exceptional quality. 
             I also contributed to a highly successful year of sales and production by helping the team manage increased project volume without compromising standards.
          </p>
         </section>
        </main>
        
        
    )
}