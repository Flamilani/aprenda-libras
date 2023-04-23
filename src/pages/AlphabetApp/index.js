import React, { Fragment, useState } from "react"
/* import * as htmlToImage from 'html-to-image'; */
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";
import { Link } from 'react-router-dom';
import LetterProps from "./Letter";
import Slide from 'react-reveal/Slide';

import { STEPS_LETTERS } from "../../shared/constants/steps-tour.constante";
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import Buttons from "../../components/Buttons/Buttons";
import Guide from "../../components/Guide";

const FingerspellingApp = () => {

  // const domEl = useRef(null);

  // const downloadImage = async () => {
  //   const dataUrl = await htmlToImage.toPng(domEl.current);

  //   // download image
  //   const link = document.createElement('a');
  //   link.download = "html-to-img.png";
  //   link.href = dataUrl;
  //   link.click();
  // }

  const [step, setStep] = useState(false);

  const handleClickStart = (event) => {
    event.preventDefault();
    setStep(true);
  };

  const options = Options;

  const [selected, setSelected] = useState(options[0].value);

  const handleOptionChange = e => {
    setSelected(e.target.value);
  }

  return (
    <Fragment>
      <Slide left>
        <Breadcrumb title="Datilologia em Libras" styles="sectionTop" link="/"></Breadcrumb>
        <Guide steps={STEPS_LETTERS} run={step} />
        <Buttons type="alfabeto" redirect="/alfabeto" />
        <div className="first-step-finger formGroup spaceBottom">
        <select className="second-step-finger formControl optionFonts" value={selected} onChange={handleOptionChange}>
          {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          {step === false &&
            <Link className="stepsTour" onClick={handleClickStart}><BsFillQuestionCircleFill size={22} /> </Link>
          }       
          {options.map(option => (
            selected === option.value &&
            /*           <div key={option.value} id="domEl" ref={domEl}>
                        <p onChange={handleOptionChange} className={`result ${option.style}`}>
                          <LetterProps />
                        </p>
                      </div> */

            <p key={option.value} onChange={handleOptionChange} className={`result ${option.style}`}>
              <LetterProps />
            </p>

          ))}
          {/*  <button onClick={downloadImage} className="btnDownload">Baixar imagem</button> */}
        </div>
      </Slide>
    </Fragment>
  );
}

export default FingerspellingApp;