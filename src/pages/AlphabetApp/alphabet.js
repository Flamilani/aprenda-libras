import React, { Fragment } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import LetterProps from "./Letter";
import Slide from 'react-reveal/Slide';

const AlphabetApp = () => {

  return (
    <Fragment>
      <Slide right>
      <Breadcrumb title="Alfabeto em Português" styles="sectionTop" link="/"></Breadcrumb>
      <div className="option-letter spaceBottom">
        <Link to="/datilologia">
          <span className="fontLibrasA fontSizeA">
            ABC
          </span>
        </Link>
        <span className="fontSizeB fontBack">
          ABC
        </span>
      </div>
      <div className="formGroup">
        <p className="result letter-alphabet">
          <LetterProps />
        </p>
      </div>
      </Slide>
    </Fragment>
  );
}

export default AlphabetApp;