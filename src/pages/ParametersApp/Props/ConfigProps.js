import { Link } from 'react-router-dom';
import { Configuration } from '../../../shared/constants/parameters/configuration.constant';

import './../style.css';

const CMProps = () => {

    const cConfig = Configuration;

    const listCM = [];

    cConfig.forEach((list, index) => {
        listCM.push(
            <div className="config" key={index}>
                <Link to={list.id}>
                   <img className="imgConfig" src={list.cm} alt="" />
                </Link>
            </div>
        )
    });

    return (
        <>
            {listCM}
        </>
    )
}

export default CMProps; 