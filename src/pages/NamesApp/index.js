import React, { useState } from "react"
/* import * as htmlToImage from 'html-to-image'; */
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";
import { removeAcento } from '../../utils/helper';
import Slide from 'react-reveal/Slide';

import './style.css';

const NamesApp = () => {

    /* const domEl = useRef(null);

    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
    }
 */
    const [name, setName] = useState('');

    const options = Options;
    const [selected, setSelected] = useState(options[0].value);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleOptionChange = e => {
        setSelected(e.target.value);
    }


    return (
        <>
            <Slide left>
                <Breadcrumb title="Nomes" styles="sectionTop" link="/"></Breadcrumb>
                <div className="formGroup">
                    <label htmlFor="name">Seu nome</label>
                    <input
                        className="inputCamp name" type="text"
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
                    {
                        !name &&
                        <p onChange={handleOptionChange} className="result inicial">
                            Após o nome digitado, seu nome em Libras aparece aqui
                        </p>
                    }
                    {options.map(option => (
                        name && selected === option.value &&
                        <div onChange={handleOptionChange} key={option.value}>
                            {/*             <div className="result" id="domEl" ref={domEl}>
                                <p>
                                    {removeAcento(name)}
                                </p>
                                <p className="fonteOriginal">
                                    {removeAcento(name)}
                                </p>
                            </div> */}
                            <p className={`result ${option.style}`}>
                                {removeAcento(name)}
                            </p>
                            <p className="fonteOriginal">
                                {removeAcento(name)}
                            </p>

                            {/*    <button onClick={downloadImage} className="btnDownload">Baixar imagem</button> */}
                        </div>
                    ))}
                </div>
            </Slide>
        </>
    )
}

export default NamesApp; 