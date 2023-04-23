import React, { Fragment } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import LetterProps from "./Letter";
import Slide from 'react-reveal/Slide';
import Buttons from "../../components/Buttons/Buttons";

const AlphabetApp = () => {

  return (
    <Fragment>
      <Slide right>
      <Breadcrumb title="Alfabeto em Português" styles="sectionTop" link="/"></Breadcrumb>
      <Buttons type="datilologia" redirect="/datilologia" />
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