import React from "react";
import './Experience.scss'
import egad from "../../assets/egad.svg"
import holster from '../../assets/holster.svg'



export default function Experience(){
    return(
        <main className="exp">
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
            In addition to performing my core responsibilities as a Mass Fabrication Designer at a high level, I delivered several key accomplishments during my time at EGADS.
             I standardized and formalized the company’s manufacturing drawing requirements, improving accuracy and reducing revision errors across projects. 
             I consistently produced 4–5 custom signs per month while meeting tight deadlines and maintaining exceptional quality. 
             I also contributed to a highly successful year of sales and production by helping the team manage increased project volume without compromising standards.
          </p>
         </section>
         <section className="exp__we">
          <a href="https://wethepeopleholsters.com/" className="exp__we-link">
            <img 
              src={holster}
              className="exp__we-img"
            />

          </a>
          <p className="exp__we-text">
            As a Mechanical Engineer at We The People, I significantly improved our quality control and overall production efficiency by introducing 3D scanning technology into our firearm modeling process. 
            By implementing precise digital scans, we were able to create more accurate holsters with consistent fitment and fewer revisions, which streamlined our workflow and reduced production errors.
          </p>
         </section>
        </main>
        
        
    )
}