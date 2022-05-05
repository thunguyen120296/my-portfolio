import React from "react";
import './contact.css';
import {FaFacebookMessenger, FaMailBulk, FaAddressCard} from 'react-icons/fa';
function Contact(){
    return(
        <div className="contact">
            <div className="contact__title">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt incidunt doloribus recusandae quia, vitae officia nobis ad libero aut.</p>
            </div>
            <div className="contact__body">
                <div className="contact__body__left">
                    <address><FaAddressCard /> Address: 123 Street, ABC City</address>
                    <p><a href="mailto:demo@gmail.com" className="contact__body__left--link"><FaMailBulk /> demo@gmail.com</a></p>
                    <p><a href="http://m.me/facebook" className="contact__body__left--link"><FaFacebookMessenger /> Facebook</a></p>
                </div>
                <div className="contact__body__right">
                    <form action="">
                        <div className="form__control">
                            <label htmlFor="name">Your name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form__control">
                            <label htmlFor="email">Your email:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form__control">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" />
                        </div>
                        <div className="form__control">
                            <label htmlFor="message">Message:</label>
                            <textarea rows={5} name="message" />
                        </div>
                        <div className="form__control">
                            <button className="form__btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;