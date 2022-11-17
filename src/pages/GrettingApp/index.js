import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import img01 from '../../assets/imgs/imagem-bom-dia.png';
import img02 from '../../assets/imgs/imagem-boa-tarde.png';
import img03 from '../../assets/imgs/imagem-boa-noite.png';

/* import gif01 from '../../assets/gifs/bom-dia.gif';
import gif02 from '../../assets/gifs/boa-tarde.gif';
import gif03 from '../../assets/gifs/boa-noite.gif'; */

import Slide from 'react-reveal/Slide';
import ReactTooltip from 'react-tooltip';

import './style.css';

class ThirdApp extends React.Component {
    state = {
        greetingA: false,
        greetingB: false,
        greetingC: false
    }

    handleChangeA = (e) => {
        e.preventDefault();
        this.setState({
            greetingA: true,
            greetingB: false,
            greetingC: false
        })
        console.log('greetingA');
    }

    handleChangeB = (e) => {
        e.preventDefault();
        this.setState({
            greetingA: false,
            greetingB: true,
            greetingC: false
        })
        console.log('greetingB');
    }

    handleChangeC = (e) => {
        e.preventDefault();
        this.setState({
            greetingA: false,
            greetingB: false,
            greetingC: true
        })
        console.log('greetingC');
    }

    render() {

        return (
            <>
                <Slide left>
                    <Breadcrumb title="Saudações" styles="sectionTop ampliaTop" link="/"></Breadcrumb>
                    <div className="cardGroup greetingGroup">
                        <div onClick={this.handleChangeA} className="cardApp greeting">
                            {
                                this.state.greetingA ?
                                    <div>
                                        <ReactTooltip id="dia" place="top" effect="solid" />
                                      {/*   <img data-tip="Bom dia, estou tomando café" data-for="dia" src={gif01} alt="Bom dia em Libras" /> */}
                                        <p>Bom dia em Libras</p>
                                    </div>
                                    :
                                    <div>
                                        <img src={img01} alt="Bom dia" />
                                        <p>Bom dia</p>
                                    </div>

                            }
                        </div>
                        <div onClick={this.handleChangeB} className="cardApp greeting">
                            {
                                this.state.greetingB ?
                                    <div>
                                        <ReactTooltip id="tarde" place="top" effect="solid" />
{/*                                         <img data-tip="Boa tarde, estou trabalhando" data-for="tarde" src={gif02} alt="Boa tarde em Libras" /> */}
                                        <p>Boa tarde em Libras</p>
                                    </div>
                                    :
                                    <div>
                                        <img src={img02} alt="Boa tarde" />
                                        <p>Boa tarde</p>
                                    </div>

                            }
                        </div>
                        <div onClick={this.handleChangeC} className="cardApp greeting">
                            {
                                this.state.greetingC ?
                                    <div>
                                        <ReactTooltip id="noite" place="top" effect="solid" />
{/*                                         <img data-tip="Boa noite, vou dormir. Tchau!" data-for="noite" src={gif03} alt="Boa noite em Libras" /> */}
                                        <p>Boa noite em Libras</p>
                                    </div>
                                    :
                                    <div>
                                        <img src={img03} alt="Boa noite" />
                                        <p>Boa noite</p>
                                    </div>

                            }
                        </div>
                    </div>
                </Slide>
            </>
        )
    }
}

export default ThirdApp; 