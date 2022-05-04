import React from 'react';
import { Link} from 'react-router-dom';
import './navigation.css';
import {BiHome, BiUserCircle, BiBookHeart, BiGridAlt, BiMessageRoundedDots} from 'react-icons/bi';
function Navigation(){
    return (
        <ul className='navigation'>
            <li><Link to='/' className='item__link'><BiHome /></Link></li>
            <li><Link to='#about' className='item__link'><BiUserCircle /></Link></li>
            <li><Link to='#experience' className='item__link'><BiBookHeart /></Link></li>
            <li><Link to='#portfolio' className='item__link'><BiGridAlt /></Link></li>
            <li><Link to='#contact' className='item__link'><BiMessageRoundedDots /></Link></li>
        </ul>
    )
}
export default Navigation;