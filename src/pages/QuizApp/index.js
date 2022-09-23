/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import './style.css';

const QuizStartApp = () => {
    return (
        <Fragment>
                   <Slide left>
                <Breadcrumb title="Quiz" styles="sectionTop" link="/"></Breadcrumb>
                <div className="formGroup quizCard">
                    <Link className="btnPlayAgain" to="/quiz">
                        Iniciar Quiz
                    </Link> 
                </div>
                </Slide>
        </Fragment>
    )
}

export default QuizStartApp; 