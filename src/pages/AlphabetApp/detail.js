import React from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Alphabet } from "./alphabet.constant";
import { useParams } from "react-router-dom";
import LetterDetail from "./LetterDetail";
import { Fragment } from "react";

const DetailApp = () => {
  const params = useParams();
  const quote = Alphabet.letter.find((quote) => quote.id === params.id);

  const state = {
    name: Alphabet.letter,
    showOption: "a",    
  }

  const handleOptionChange = (e) => {
    this.setState({
      showOption: e.target.value
    })
  }


    return (
      <Fragment>
        <Breadcrumb title="Alfabeto Manual" styles="sectionTop"></Breadcrumb>
        <div className="formGroup">
          <select className="formControl" onChange={handleOptionChange}>
            <option value="a">
              Fonte 1
            </option>
            <option value="b">
              Fonte 2
            </option>
            <option value="c">
              Fonte 3
            </option>
            <option value="d">
              Fonte 4
            </option>
          </select>
          <label>em Libras</label>

          {
            state.showOption === "a" &&
            <p className="result fontLibrasA">
              <LetterDetail list={quote.letter} />
            </p>
          }
          {
            state.showOption === "b" &&
            <p className="result fontLibrasB">{state.name}</p>
          }
          {
            state.showOption === "c" &&
            <p className="result fontLibrasC">{state.name}</p>
          }
          {
            state.showOption === "d" &&
            <p className="result fontLibrasD">{state.name}</p>
          }

        </div>
      </Fragment>
    );
  }




export default DetailApp;