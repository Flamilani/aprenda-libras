import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

import './style.css';
import { removeAcento } from './../../utils/helper';

class FirstApp extends React.Component {
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
                    <div className="sectionTop">
                        <Link aria-label="Retornar para Início" className="linkTop" to="/">
                            <BsArrowLeftSquareFill />
                        </Link>
                        <span>Nomes</span>
                    </div>
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
                                <p className="result fontLibrasA">{removeAcento(this.state.name)}</p>
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
                            <button className="btnDownload">Baixar imagem em jpg</button>
                        </div>
                    }

                </form>
            </>
        )
    }
}

export default FirstApp; 