import React from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Alphabet } from "./alphabet.constant";
import LetterProps from "./Letter";

class AlphabetApp extends React.Component {

  state = {
    name: Alphabet.letter,
    showOption: "a"
  }

  handleOptionChange = (e) => {
    this.setState({
      showOption: e.target.value
    })
    console.log(e.target.value)
  }
  render(){
    return (
      <>
        <Breadcrumb title="Alfabeto Manual" styles="sectionTop"></Breadcrumb>
        <div className="formGroup">
          <select className="formControl" onChange={this.handleOptionChange}>
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
            this.state.showOption === "a" &&
            <p className="result fontLibrasA">
              <LetterProps />
            </p>
          }
          {
            this.state.showOption === "b" &&
            <p className="result fontLibrasB">{this.state.name}</p>
          }
          {
            this.state.showOption === "c" &&
            <p className="result fontLibrasC">{this.state.name}</p>
          }
          {
            this.state.showOption === "d" &&
            <p className="result fontLibrasD">{this.state.name}</p>
          }

        </div>
      </>
    );
  }

  }

export default AlphabetApp;