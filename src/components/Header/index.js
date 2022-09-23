import React from 'react';
import './style.css';
import logo from '../../assets/imgs/libras.png';
import retrato from '../../assets/imgs/template.png';
import Slide from 'react-reveal/Slide';

function Header() {
    return (
        <>
            <Slide top>
                <header className="header">
                    <img className="logo" src={logo} alt="Símbolo Libras" />
                    <h1>Aprenda Libras
                        <span> com Flavio Milani</span>
                    </h1>
                    <img className="retrato" src={retrato} alt="Retrato Flavio" />
                </header>
            </Slide>
        </>
    )
}

export default Header; 