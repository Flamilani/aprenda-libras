/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { removeAcento } from '../../utils/helper';

import './style.css';

class NamesApp extends React.Component {
    
    state = {
        name: "",
        showOption: "a"
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOptionChange = (e) => {
        this.setState({
            showOption: e.target.value
        })
        console.log(e.target.value)
    }    

    render() {    
        return (
            <>
                <form autoComplete="off">
                    <Breadcrumb title="Nomes" styles="sectionTop"></Breadcrumb>
                    <div className="formGroup">
                        <label htmlFor="name">Seu nome</label>
                        <input
                            className="inputCamp name" id="name" type="text"
                            placeholder='Digite seu nome aqui'
                            onChange={this.handleChange}
                        />
                    </div>
                    {
                        this.state.name &&
                        <div className="formGroup">
                            <select className="formControl" onChange={this.handleOptionChange}>
                                <option value="a">
                                    Fonte 1
                                </option>
                                <option value="b">
                                    Fonte 2
                                </option>
                                <option value="c">
                                    Fonte 3
                                </option>
                                <option value="d">
                                    Fonte 4
                                </option>
                            </select>
                            <label>Meu nome em Libras</label>
                            {
                                this.state.showOption === "a" &&
                                <div id="domEl" ref="{domEl}">
                                    <p className="result fontLibrasA">{removeAcento(this.state.name)}</p>
                                </div>
                            }
                            {
                                this.state.showOption === "b" &&
                                <p className="result fontLibrasB">{removeAcento(this.state.name)}</p>
                            }
                            {
                                this.state.showOption === "c" &&
                                <p className="result fontLibrasC">{removeAcento(this.state.name)}</p>
                            }
                            {
                                this.state.showOption === "d" &&
                                <p className="result fontLibrasD">{removeAcento(this.state.name)}</p>
                            }
                            {/* <button onClick="{}" className="btnDownload">Baixar imagem em jpg</button> */}
                        </div>
                    }

                </form>
            </>
        )
    }
}

export default NamesApp; 