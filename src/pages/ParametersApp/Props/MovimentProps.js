import { Link } from 'react-router-dom';
import { Moviments } from '../../../shared/constants/parameters/moviments.constant';

import './../style.css';

const MovProps = (props) => {

    const cMov = Moviments;

    const lists = [];

    cMov.forEach((list, index) => {
        lists.push(
            <div className="moviment" key={index}>
               {/*  <Link to={list.id}> */}
                   <img className={props.styles} src={list.moviment} alt={list.name} />
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

export default MovProps; 