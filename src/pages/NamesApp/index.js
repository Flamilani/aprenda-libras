/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";
import { removeAcento } from '../../utils/helper';

import './style.css';

const NamesApp = () => {

    const [name, setName] = useState('');

    const options = Options;
    const [selected, setSelected] = useState(options[0].value);

    const handleChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleOptionChange = e => {
        console.log(e.target.value);
        setSelected(e.target.value);
    }


    return (
        <Fragment>
                <Breadcrumb title="Nomes" styles="sectionTop" link="/"></Breadcrumb>
                <div className="formGroup">
                    <label htmlFor="name">Seu nome</label>
                    <input
                        className="inputCamp name" id="name" type="text"
                        placeholder='Digite seu nome aqui'
                        onChange={handleChange}
                        autoComplete="off"
                    />

                </div>

                <div className="formGroup">
                    <select disabled={name === ''} className="formControl" value={selected} onChange={handleOptionChange}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                    <label>Meu nome em Libras</label>

                    {options.map(option => (
                        !name && selected === option.value &&
                        <p onChange={handleOptionChange} key={option.value} className="result inicial">
                            Após o nome digitado, seu nome em Libras aparece aqui
                        </p>
                    ))}
                    {options.map(option => (
                        name && selected === option.value &&
                        <p onChange={handleOptionChange} key={option.value} className={`result ${option.style}`}>
                            {removeAcento(name)}
                        </p>
                    ))}
                    {/* <button onClick="{}" className="btnDownload">Baixar imagem em jpg</button> */}
                </div>
        </Fragment>
    )
}

export default NamesApp; 