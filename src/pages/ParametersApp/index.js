import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import Slide from 'react-reveal/Slide';
import ParametersProps from "./Props/ParametersProps";
import './style.css';
import { Link } from "react-router-dom";
import { BsFillQuestionCircleFill } from 'react-icons/bs';

import { STEPS_PARAMETERS } from "../../shared/constants/steps-tour.constante";
import Guide from "../../components/Guide";

const ParametersApp = () => {
    const [step, setStep] = useState(false);

    const handleClickStart = (event) => {
        event.preventDefault();
         setStep(true);
    };

    return (
        <Fragment>
            <Slide left>
                <Breadcrumb title="Parâmetros da Libras" styles="sectionTop" link="/"></Breadcrumb>
                <Guide steps={STEPS_PARAMETERS} run={step} />
                  <div className="fundoHands fundoParametros">
                    {step === false &&
                        <Link className="helpParameters" onClick={handleClickStart}><BsFillQuestionCircleFill size={22} /> </Link>
                    }
                    <ParametersProps />
                </div>
            </Slide>
        </Fragment>
    );
}

export default ParametersApp;