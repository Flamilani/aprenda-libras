import React, { Fragment, useState } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";

import './style.css';

const NumberApp = () => {
    const [number, setNumber] = useState('');

    const options = Options;
    const [selected, setSelected] = useState(options[0].value);

    const handleChange = (e) => {
        console.log(e.target.value);
        setNumber(e.target.value);
    }

    const handleOptionChange = e => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }

    return (
        <Fragment>
            <section>
                <Breadcrumb title="Números" styles="sectionTop"></Breadcrumb>
                <div className="formGroup number">
                    <label htmlFor="number">Número</label>
                    <input
                        className="inputCamp number" id="number" type="number"
                        placeholder='Digite qualquer número'
                        pattern="[0-9]*"
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </div>
                {
                    number &&
                    <div className="formGroup number">
                        <select disabled={number === ''} className="formControl" value={selected} onChange={handleOptionChange}>
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                        <label>Número em Libras</label>
                        
                        {options.map(option => (
                            number && selected === option.value &&
                            <p onChange={handleOptionChange} key={option.value} className={`result number ${option.style}`}>
                                {number}
                            </p>
                        ))}
                    </div>
                }

            </section>
        </Fragment>
    )
}

export default NumberApp; 