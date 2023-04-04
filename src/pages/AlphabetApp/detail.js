import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { Alphabet } from "../../shared/constants/alphabet.constant";
import { useParams } from "react-router-dom";
import { Options } from "../../shared/constants/options.constant";
import Fade from 'react-reveal/Fade';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './style.css';

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
      <Fade>
        <Breadcrumb title="Datilologia em Libras" styles="sectionTop" link="/datilologia"></Breadcrumb>
        <div className="option-letter spaceBottom">
          <span className="fontLibrasA fontSizeA fontBack">
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
          <div className={Number(quote.id) !== 1 ? 'spacePrevNext' : 'spacePrev'}>
            {Number(quote.id) !== 1 &&
              <Link className="btnPrev" to={`/datilologia/${Number(quote.id) - 1}`}>
                <FaArrowAltCircleLeft size={30} />
              </Link>
            }
            {Number(quote.id) !== 26 &&
              <Link className="btnNext" to={`/datilologia/${Number(quote.id) + 1}`}>
                 <FaArrowAltCircleRight size={30} />
              </Link>
            }
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}




export default DetailApp;