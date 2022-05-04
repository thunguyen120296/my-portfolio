import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import {BiHome, BiUserCircle, BiBookHeart, BiGridAlt, BiMessageRoundedDots} from 'react-icons/bi';
function Navigation(){
    return (
        <ul className='navigation'>
            <li><a href='/' className='item__link'><BiHome /></a></li>
            <li><a href="/about" className='item__link'><BiUserCircle /></a></li>
            <li><a href="/experience" className='item__link'><BiBookHeart /></a></li>
            <li><a href="/portfolio" className='item__link'><BiGridAlt /></a></li>
            <li><a href='/contact' className='item__link'><BiMessageRoundedDots /></a></li>
        </ul>
    )
}
export default Navigation;