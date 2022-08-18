import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

import './style.css';

class SecondApp extends React.Component {
    state = {
        number: "",
        showOption: "a"
    }

    handleChange = (e) => {
        this.setState({
            number: e.target.value
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
                        <Link className="linkTop" to="/">
                            <BsArrowLeftSquareFill />
                        </Link>
                        <span>Números</span>
                    </div>
                    <div className="formGroup number">
                        <label htmlFor="number">Número</label>
                        <input
                            className="inputCamp number" id="number" type="number"
                            placeholder='Digite qualquer número'
                            pattern="[0-9]*"
                            onChange={this.handleChange}
                        />
                    </div>
                    {
                        this.state.number &&
                        <div className="formGroup number">
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
                            <label>Número em Libras</label>
                            {
                                this.state.showOption === "a" &&
                                <p className="result number fontLibrasA">{this.state.number}</p>
                            }
                            {
                                this.state.showOption === "b" &&
                                <p className="result number fontLibrasB">{this.state.number}</p>
                            }
                            {
                                this.state.showOption === "c" &&
                                <p className="result number fontLibrasC">{this.state.number}</p>
                            }
                            {
                                this.state.showOption === "d" &&
                                <p className="result number fontLibrasD">{this.state.number}</p>
                            }
                        </div>
                    }

                </form>
            </>
        )
    }
}

export default SecondApp; 