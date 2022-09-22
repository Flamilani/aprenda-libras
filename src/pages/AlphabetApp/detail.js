import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { Alphabet } from "../../shared/constants/alphabet.constant";
import { useParams } from "react-router-dom";
import { Options } from "../../shared/constants/options.constant";

import './style.css';

const DetailApp = () => {

  const params = useParams();
  const quote = Alphabet.find((quote) => quote.id === params.id);

  const options = Options;

  const [selected, setSelected] = useState(options[0].value);

  const handleOptionChange = e => {
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  return (
    <Fragment>
      <Breadcrumb title="Datilologia em Libras" styles="sectionTop" link="/datilologia"></Breadcrumb>
      <div className="option-letter spaceBottom">
          <span className="fontLibrasA fontSizeA">
            ABC
          </span>
          <Link to={`/alfabeto/${quote.id}`}>
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
          <p onChange={handleOptionChange} key={option.value} className={`result detail ${option.style}`}>
            {quote.letter}
          </p>
        ))}
      </div>
    </Fragment>
  );
}




export default DetailApp;