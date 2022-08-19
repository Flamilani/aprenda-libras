import React from 'react';
import './style.css';
import logo from '../../assets/imgs/libras.png';
import retrato from '../../assets/imgs/template.png';

function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Símbolo Libras" /> 
            <h1>Aprenda Libras
                <span> com Flavio Milani</span>
            </h1>
            <img className="retrato" src={retrato} alt="Retrato Flavio" />
        </header>
    )
}

export default Header; 