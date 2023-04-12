// import { Link } from 'react-router-dom';
import { Articulations } from '../../../shared/constants/parameters/articulation.constant';

import './../style.css';

const ArticulationProps = (props) => {

    const cArt = Articulations;

    const lists = [];

    cArt.forEach((list, index) => {
        lists.push(
            <div className={list.style} key={index}>
                {list.type === props.type &&
                  //  <Link to={list.id}>
                        <img src={list.image} alt={list.name} />
                  //  </Link>
                }
            </div>
        )
    });

    return (
        <>
            {lists}
        </>
    )
}

export default ArticulationProps; 