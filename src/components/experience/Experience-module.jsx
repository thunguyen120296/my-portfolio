import React from 'react';
import {DiCss3, DiPython, DiWordpress, DiJavascript, DiNodejsSmall, DiHtml5} from 'react-icons/di';
function ExperienceModule(){
    return (
        <div className="experience__body">
            <div className="experience__box">
                <div className='experience__box__title'>
                    <DiHtml5 />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo expedita cupiditate officia blanditiis fuga.</p>
            </div>
            <div className="experience__box">
                <div className="experience__box__title">
                    <DiCss3 />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo expedita cupiditate officia blanditiis fuga.</p>
            </div>
            <div className="experience__box">
                <div className="experience__box__title">
                    <DiJavascript />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo expedita cupiditate officia blanditiis fuga.</p>
            </div>
            <div className="experience__box">
                <div className="experience__box__title">
                    <DiNodejsSmall />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo expedita cupiditate officia blanditiis fuga.</p>
            </div>
            <div className="experience__box">
                <div className="experience__box__title">
                    <DiPython />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo expedita cupiditate officia blanditiis fuga.</p>
            </div>
            <div className="experience__box">
                <div className="experience__box__title">
                    <DiWordpress />
                    <h2>Lorem ipsum dolor sit amet.</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo expedita cupiditate officia blanditiis fuga.</p>
            </div>
        </div>
    )
}
export default ExperienceModule;