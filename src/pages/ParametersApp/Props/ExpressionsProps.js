import { Link } from 'react-router-dom';
import { Expressions } from '../../../shared/constants/parameters/expressions.constant';

import './../style.css';

const ExpressionsProps = () => {

    const cDir = Expressions;

    const lists = [];

    cDir.forEach((list, index) => {
        lists.push(
            <div className="expression" key={index}>
             {/*    <Link to={list.id}> */}
                   <img className="imgExp" src={list.expression} alt={list.name} />
                   <div className="legend">{list.name}</div>
             {/*    </Link> */}
            </div>
        )
    });

    return (
        <>
            {lists}
        </>
    )
}

export default ExpressionsProps; 