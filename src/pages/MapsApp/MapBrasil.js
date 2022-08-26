/* import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import { Breadcrumb } from '../../components/Breadcrumb';

import './style.css';

import { MapBrazil } from 'react-brazil-map'

function MapsBrazilApp() {
  const [distritc, setDistrict] = useState('')
  return (
    <>
    <Breadcrumb title="Mapa do Brasil" styles="sectionTop"></Breadcrumb>
      <div className="AppMapa">
        <MapBrazil data-tip={distritc} data-for="mapa" data-html={true} onChange={setDistrict} width={400} height={400} fill='#41fd7f' bg='green' colorLabel='black' />
        <ReactTooltip id="mapa" place="right" effect="solid" />
        <p>Clique num estados do Brasil</p>
        <p className="listaEstado">{distritc === 'AM' ? 'Amazonas' : ''}
          {distritc === 'AC' ? 'Acre' : ''}
          {distritc === 'RR' ? 'Roraima' : ''}
          {distritc === 'AP' ? 'Amapá' : ''}
          {distritc === 'PA' ? 'Pará' : ''}
        </p>
      </div>
    </>
  )
}

export default MapsBrazilApp;  */