import React, { Fragment } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import Slide from 'react-reveal/Slide';
import ParametersProps from "./Props/ParametersProps";

import './style.css';

const ParametersApp = () => {



    return (
        <Fragment>
            <Slide left>
                <Breadcrumb title="Parâmetros da Libras" styles="sectionTop" link="/"></Breadcrumb>
                <div className="fundoHands fundoParametros">
                    <ParametersProps />
                </div>
            </Slide>
        </Fragment>
    );
}

export default ParametersApp;