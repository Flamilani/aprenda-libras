import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import { Breadcrumb } from '../../components/Breadcrumb';

import MapChart from "./MapChart";

function MapsApp() {
    const [content, setContent] = useState("");
    return (
      <div className="mapsApp">
        <Breadcrumb title="Mapa Mundi" styles="sectionTop"></Breadcrumb>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }

  export default MapsApp; 