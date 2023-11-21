import React from 'react';
import './css/NavBar.css';
import {Link} from "react-router-dom";
const NavBar = (props) => {
    return (
        <div className='bar'>
            <Link to="/"><button className='navbutton'>{props.home}</button></Link>
            <Link to="/status"><button className='navbutton'>{props.status}</button></Link>
            <Link to="/about"><button className='navbutton'>{props.aboutus}</button></Link>
            <Link to="/Login"><button className='navbutton'>{props.login}</button></Link>
        </div>
    );
}

export default NavBar;
