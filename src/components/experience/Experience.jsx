import React from 'react';
import ExperienceModule from './Experience-module';
import './experience.css';
function Experience(){
    return (
        <div className='experience'>
            <div className="experience__title">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt incidunt doloribus recusandae quia, vitae officia nobis ad libero aut.</p>
            </div>
            <ExperienceModule />
        </div>
    )
}
export default Experience;