import React from 'react';
import { Cards } from '../../shared/constants/cards.constant';
import { Level } from '../../shared/constants/level.constant';
import Zoom from 'react-reveal/Zoom';
import './style.css';
import CardItems from './CardItems';

function Home() {
    const cHome = Cards;

    return (
        <>
            <Zoom>
                {Level.map((levels) => (
                    <div className="cardGroup cardHome" key={levels.id}>
                     {/*    {levels.showLevel === true &&
                            <h2>{levels.level}</h2>
                        } */}
                        <div className="cardGroup cardHome">
                            {cHome.map((list, index) => (
                                levels.id === list.levelId &&
                                <div key={index}>
                                    <CardItems                                        
                                        link={list.link}
                                        title={list.title}
                                        image={list.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
{/*                 <div className="breve">
                    <h3>Em Breve</h3>
                    <ul>
                        <li>Frases em Libras</li>
                    </ul>
                </div> */}
            </Zoom>
        </>
    )
}

export default Home; 
