import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb';
import Question from './Question';
import Answer from './Answer';
import { StateQuestions } from '../../shared/constants/state-questions.constant';
import './style.css';

export default class Quiz extends Component {

    // initiating the local state
    state = StateQuestions;

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
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

    render() {
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;

        let scoreResult;
        if (((score / Object.keys(questions).length) * 100) === 100) {
            scoreResult = "Parabéns, acertou tudo!";
        } else {
            scoreResult = "Tem que estudar mais";
        }
        return (
            <aside className="quiz">         
                    <Breadcrumb title="Quiz" styles="sectionTop" link="/iniciarquiz"></Breadcrumb>
                    <div className="Content">
                        {step <= Object.keys(questions).length ?
                            (<>
                                <div className="stepsTop">{step} / {Object.keys(questions).length}</div>
                                <Question
                                    question={questions[step]}
                                />
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
                                    <h1 className="titleFinal">Terminou a Quiz!</h1>
                                    <p className="scoreFinal">Seus pontos são: {parseFloat((score / Object.keys(questions).length) * 100).toFixed(0)}</p>
                                    <p className="scorePhase">{scoreResult}</p>
                                    <Link className="btnPlayAgain" to="/iniciarquiz">
                                        Jogar novamente
                                    </Link>
                                </div>
                            )
                        }
                    </div>    
            </aside>
        );
    }
}