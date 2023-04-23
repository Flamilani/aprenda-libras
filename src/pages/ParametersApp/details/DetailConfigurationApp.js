import React, { Fragment } from "react"
import { Configuration } from "../../../shared/constants/parameters/configuration.constant";
import { useParams } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import './../style.css';
import { Breadcrumb } from "../../../components/Breadcrumb";
import Arrows from "../../../components/Arrows/Arrows";

const DetailConfigurationApp = () => {

  const params = useParams();
  const config = Configuration.find((quote) => quote.id === params.id);

  return (
    <Fragment>
      <Fade>
        <Breadcrumb title="Configuração de Mão" styles="sectionTop" link="/parametros"></Breadcrumb>
        <div className="formGroup spaceBottom">        
            <img className="imgConfigDetail" src={config.cm} alt="" />
          <Arrows id={config.id} redirect="cm" lastNumber={61} />
        </div>
      </Fade>
    </Fragment>
  );
}




export default DetailConfigurationApp;