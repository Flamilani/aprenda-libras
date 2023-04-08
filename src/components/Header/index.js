import React from 'react';
import './style.css';
import logo from '../../assets/imgs/logo.png';
import Slide from 'react-reveal/Slide';

function Header() {
    return (
        <>
            <Slide top>
                <header className="header">
                    <img className="logo" src={logo} alt="Logo Libras Virtual" />
                </header>
            </Slide>
        </>
    )
}

export default Header; 