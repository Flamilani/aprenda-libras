import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import Question from './Question';
import Answer from './Answer';
import { StateQuestions } from './state-questions';
import './style.css';

export default class Quiz extends Component {

    // initiating the local state
    state = StateQuestions;

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <aside className="quiz">
            <div className="sectionTop">
                <Link aria-label="Retornar para Início" className="linkTop" to="/">
                    <BsArrowLeftSquareFill />
                </Link>
                <span>Quiz</span>
            </div>
            <div className="Content">
                {step <= Object.keys(questions).length ? 
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        {step} de {Object.keys(questions).length}
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(questions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Próximo</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>Completou a Quiz!</h1>
                            <p>Seus pontos são: {score} de {Object.keys(questions).length}</p>
                            <p>Obrigado por jogar!</p>
                            <button type="button" className="btnPlayAgain">Jogar novamente</button>
                        </div>
                    )
                }
            </div>
            </aside>
        );
    }
}