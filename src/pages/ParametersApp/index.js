import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import Slide from 'react-reveal/Slide';
import ParametersProps from "./Props/ParametersProps";
import './style.css';
import { Link } from "react-router-dom";
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import JoyRide from "react-joyride";
import { STEPS_PARAMETERS } from "../../shared/constants/steps-tour.constante";

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
                <JoyRide
                    steps={STEPS_PARAMETERS}
                    continuous={true}
                    scrollToFirstStep
                    showSkipButton={true}
                    showProgress={true}
                    run={step}
                    locale={{
                        last: "Último",
                        next: 'Próximo',
                        skip: "Pular",
                        back: 'Voltar',
                        close: 'Fechar'
                    }}
                    styles={{
                        options: {
                            zIndex: 10000,
                        },
                    }}
                />
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