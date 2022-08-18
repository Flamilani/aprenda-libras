import React from 'react';
import './style.css';
import logo from '../../assets/imgs/libras.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Símbolo Libras" /> 
            <h1>Aprenda Libras
                <span> com Flavio Milani</span>
            </h1>
            
        </header>
    )
}

export default Header; 