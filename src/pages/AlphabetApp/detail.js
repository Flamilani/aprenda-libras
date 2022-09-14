import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
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
          <p onChange={handleOptionChange} key={option.value} className={`result detail ${option.style}`}>
            {quote.letter}
          </p>
        ))}
      </div>
    </Fragment>
  );
}




export default DetailApp;