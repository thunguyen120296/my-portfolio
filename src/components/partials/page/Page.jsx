import React from 'react';
import './page.css';
import Navigation from '../navigation/Navigation';
import {FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import About from '../../about/About';
import Experience from '../../experience/Experience';
import Portfolio from '../../portfolio/Portfolio';
import Contact from '../../contact/Contact';
function Page(){
    return (
        <div className='header'>
            <Navigation />
            <div className="user__information">
                <div className="user__content">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quia nihil sequi corrupti consequuntur consequatur aliquam exercitationem excepturi sapiente ab?</p>
                    <div className="user__content__group__link">
                        <a href="#">Download CV</a>
                        <a href="#">Contact Me</a>
                    </div>
                </div>
                <div className="user__social">
                    <FaTwitter />
                    <FaFacebookF />
                    <FaLinkedinIn />
                </div>
                <div className="scroll__down">
                    <a href='#'>Scroll Down</a>
                </div>
            </div>
            <Experience />
            <Portfolio />
            <Contact />
        </div>
    )
}
export default Page;