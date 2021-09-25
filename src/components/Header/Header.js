import React from 'react';
import './Header.css';
import logo from '../../the_meal_db_api.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleDown, faHouseUser,faSign,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const iconHeader = <FontAwesomeIcon icon={faHouseUser} className='nav-icon'/>
    const newIcon = <FontAwesomeIcon icon={faArrowAltCircleDown} className='nav-icon'/>
    const logIcon = <FontAwesomeIcon icon={faSign} className='nav-icon'/>
    const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} className='nav-icon' />
    return (
       <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/home">{iconHeader}Home</a>
                <a href="/New Item">{newIcon}New Items</a>
                <a href="/log-in">{logIcon}Log In</a>
                <a href="/Signup">{signOutIcon}Sign Up</a>
            </nav>
        </div>
    );
};

export default Header;