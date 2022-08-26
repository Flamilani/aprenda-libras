import React from 'react';
import { Link } from 'react-router-dom';
import capa01 from '../../assets/imgs/capa01.png';
import capa02 from '../../assets/imgs/numeros.png';
import capa03 from '../../assets/imgs/saudacoes.png';
import capa04 from '../../assets/imgs/linha-tempo.png';
import capa05 from '../../assets/imgs/quiz.png';

import './style.css';

function Home() {
    return (
        <div className="cardGroup cardHome">

            <div className="cardApp">
                <Link to="/nomes">
                    <img src={capa01} alt="Nomes" />
                    <p>Nomes</p>
                </Link>
            </div>
            <div className="cardApp">
                <Link to="/numeros">
                <img src={capa02} alt="Números" />
                    <p>Números</p>
                </Link>
            </div>
            <div className="cardApp">
                <Link to="/saudacoes">
                    <img src={capa03} alt="Saudações" />
                    <p>Saudações</p>
                </Link>
            </div>

            <div className="cardApp">
                <Link to="/linhadetempo">
                    <img src={capa04} alt="Linha de tempo" />
                    <p>Linha de Tempo</p>
                </Link>
            </div>
            <div className="cardApp">
                <Link to="/quiz">
                    <img src={capa05} alt="Quiz" />
                    <p>Quiz</p>
                </Link>
            </div>
{/*             <div className="cardApp">
                <Link to="/mapa">
                    <img src={capa03} alt="Mapa" />
                    <p>Mapa</p>
                </Link>
            </div> */}
        </div>

    )
}

export default Home; 