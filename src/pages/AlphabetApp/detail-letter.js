import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Alphabet } from "../../shared/constants/alphabet.constant";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Options } from "../../shared/constants/options.constant";
import Fade from 'react-reveal/Fade';

import './style.css';

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
      <Fade>
      <Breadcrumb title="Alfabeto em Português" styles="sectionTop" link="/alfabeto"></Breadcrumb>
      <div className="option-letter spaceBottom">
        <Link to={`/datilologia/${quote.id}`}>
          <span className="fontLibrasA fontSizeA">
            ABC
          </span>
        </Link>
        <span className="fontSizeB fontBack">
          ABC
        </span>
      </div>
      <div className="formGroup"> 
        {options.map(option => (
          selected === option.value &&
          <p onChange={handleOptionChange} key={option.value} className="result detail">
            {quote.letter}
          </p>
        ))}
      </div>
      </Fade>
    </Fragment>
  );
}




export default DetailLetterApp;