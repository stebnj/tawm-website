import React from "react";
import './Experience.scss'
import egad from "../../assets/egad.svg"
import holster from '../../assets/holster.svg'
import tawm from '../../assets/tawmLogo.svg'



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
         <section className="exp__tawm">
            <img
              src = {tawm}
              className="exp__tawm-img"
            />
            <p className="exp__tawm-text">
             At Harnell Designs, I worked as a Mechanical Designer supporting engineering teams by revising and updating 3D CAD models based on engineer-provided redlines and evolving design requirements. 
             I assisted in preparing complete drawing packages for review, release, and fabrication, ensuring accuracy through drawing checklists, version control, and documentation standards. 
             In addition to executing design changes, I contributed to improving internal workflows for redline tracking, model revisions, and design documentation, helping streamline collaboration and reduce errors across the design process. 
            </p>
        </section>
        </main>
        
        
        
    )
}