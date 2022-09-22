/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

import './style.css';

const QuizStartApp = () => {
    return (
        <Fragment>
                <Breadcrumb title="Quiz" styles="sectionTop" link="/"></Breadcrumb>
                <div className="formGroup quizCard">
                    <Link className="btnPlayAgain" to="/quiz">
                        Iniciar Quiz
                    </Link> 
                </div>
        </Fragment>
    )
}

export default QuizStartApp; 