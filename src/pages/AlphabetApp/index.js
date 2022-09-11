import React from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Alphabet } from "./alphabet.constant";
import LetterProps from "./Letter";

const AlphabetApp = () => {

  const state = {
    name: Alphabet.letter,
    showOption: "a"
  }

  const handleOptionChange = (e) => {
    this.setState({
      showOption: e.target.value
    })
    console.log(e.target.value)
  }

    return (
      <>
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
              <LetterProps />
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
      </>
    );
  }

export default AlphabetApp;