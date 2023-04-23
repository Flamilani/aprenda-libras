import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Alphabet } from "../../shared/constants/alphabet.constant";
import { useParams } from "react-router-dom";
import { Options } from "../../shared/constants/options.constant";

import './style.css';
import Buttons from "../../components/Buttons/Buttons";
import Arrows from "../../components/Arrows/Arrows";

const DetailLetterApp = () => {

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
      <Breadcrumb title="Alfabeto em Português" styles="sectionTop" link="/alfabeto"></Breadcrumb>
      <Buttons type="datilologia" redirect={`/datilologia/${quote.id}`} />
      <div className="formGroup">
        {options.map(option => (
          selected === option.value &&
          <p onChange={handleOptionChange} key={option.value} className="result detail">
            {quote.letter}
          </p>
        ))}
        <Arrows id={quote.id} redirect="alfabeto" lastNumer={26} />
      </div>
    </Fragment>
  );
}




export default DetailLetterApp;