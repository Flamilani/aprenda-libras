import React from 'react';
import { Link } from 'react-router-dom';
import { Cards } from '../../shared/constants/cards.constant';
import Zoom from 'react-reveal/Zoom';

import './style.css';

function Home() {
    const cHome = Cards;
    const listCards = cHome.map((list, index) =>
        <div key={index} className="cardApp">
            <Link to={list.link}>
                <img src={list.image} alt={list.title} />
                <p>{list.title}</p>
            </Link>
        </div>
    );
    return (
        <>
            <Zoom>
                <div className="cardGroup cardHome">
                    {listCards}
                </div>
                <div className="breve">
                    <h3>Em Breve</h3>
                    <ul>
                        <li>5 Parâmetros em Libras</li>
                        <li>Frases em Libras</li>
                    </ul>
                </div>
            </Zoom>
        </>
    )
}

export default Home; 