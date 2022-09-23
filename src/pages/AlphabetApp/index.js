import React, { Fragment, useState, useRef } from "react"
import * as htmlToImage from 'html-to-image';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";
import { Link } from 'react-router-dom';
import LetterProps from "./Letter";
import Slide from 'react-reveal/Slide';

const FingerspellingApp = () => {

  const domEl = useRef(null);

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current);

    // download image
    const link = document.createElement('a');
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  }

  const options = Options;

  const [selected, setSelected] = useState(options[0].value);

  const handleOptionChange = e => {
    setSelected(e.target.value);
  }

  return (
    <Fragment>
     <Slide left>
      <Breadcrumb title="Datilologia em Libras" styles="sectionTop" link="/"></Breadcrumb>
      <div className="option-letter">
        <span className="fontLibrasA fontSizeA fontBack">
          ABC
        </span>
        <Link to="/alfabeto">
          <span className="fontSizeB">
            ABC
          </span>
        </Link>
      </div>

      <div className="formGroup spaceBottom">
        <select className="formControl optionFonts" value={selected} onChange={handleOptionChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        {options.map(option => (
          selected === option.value &&
          <div key={option.value} id="domEl" ref={domEl}>
            <p onChange={handleOptionChange} className={`result ${option.style}`}>
              <LetterProps />
            </p>
          </div>
        ))}
        <button onClick={downloadImage} className="btnDownload">Baixar imagem</button>
      </div>
      </Slide>
    </Fragment>
  );
}

export default FingerspellingApp;