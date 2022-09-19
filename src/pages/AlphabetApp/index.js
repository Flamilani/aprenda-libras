import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";
import { Link } from 'react-router-dom';
import LetterProps from "./Letter";

const FingerspellingApp = () => {

  const options = Options;

  const [selected, setSelected] = useState(options[0].value);

  const handleOptionChange = e => {
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  return (
    <Fragment>
      <Breadcrumb title="Datilologia em Libras" styles="sectionTop" link="/"></Breadcrumb>
      <div className="option-letter">
      <span className="fontLibrasA fontSizeA">
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
          <p onChange={handleOptionChange} key={option.value} className={`result ${option.style}`}>
            <LetterProps />
          </p>
        ))}
      </div>
    </Fragment>
  );
}

export default FingerspellingApp;