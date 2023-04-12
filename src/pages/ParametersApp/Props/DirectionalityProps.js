import { Link } from 'react-router-dom';
import { Directionalities } from '../../../shared/constants/parameters/directionality.constant';

import './../style.css';

const DirectProps = (props) => {

    const cDir = Directionalities;

    const lists = [];

    cDir.forEach((list, index) => {
        lists.push(
            <div className="direction" key={index}>
              {/*   <Link to={list.id}> */}
                   <img className={props.styles} src={list.direction} alt={list.name} />
                   <div className="legend">{list.name}</div>
               {/*  </Link> */}
            </div>
        )
    });

    return (
        <>
            {lists}
        </>
    )
}

export default DirectProps; 