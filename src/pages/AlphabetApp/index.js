import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Options } from "../../shared/constants/options.constant";
import LetterProps from "./Letter";

const AlphabetApp = () => {

  const options = Options;

  const [selected, setSelected] = useState(options[0].value);

  const handleOptionChange = e => {
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  return (
    <Fragment>
      <Breadcrumb title="Alfabeto Manual" styles="sectionTop"></Breadcrumb>
      <div className="formGroup">
        <select className="formControl" value={selected} onChange={handleOptionChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>

        <label>em Libras</label>

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

export default AlphabetApp;