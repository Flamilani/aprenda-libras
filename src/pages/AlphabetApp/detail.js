import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Alphabet } from "../../shared/constants/alphabet.constant";
import { useParams } from "react-router-dom";
import { Options } from "../../shared/constants/options.constant";
import './style.css';
import Buttons from "../../components/Buttons/Buttons";
import Arrows from "../../components/Arrows/Arrows";

const DetailApp = () => {

  const params = useParams();
  const quote = Alphabet.find((quote) => quote.id === params.id);

  const options = Options;

  const [selected, setSelected] = useState(options[0].value);

  const handleOptionChange = e => {
    setSelected(e.target.value);
  }

  return (
    <Fragment>
        <Breadcrumb title="Datilologia em Libras" styles="sectionTop" link="/datilologia"></Breadcrumb>
        <Buttons type="alfabeto" redirect={`/alfabeto/${quote.id}`} />
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
            <p onChange={handleOptionChange} key={option.value} className={`result detail ${option.style}`}>
              {quote.letter}
            </p>
          ))}
          <Arrows id={quote.id} redirect="datilologia" lastNumer={26} />
        </div>
    </Fragment>
  );
}




export default DetailApp;