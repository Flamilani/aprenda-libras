import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CardItems = (props) => {

    return (
        <Fragment>
           <div className="cardApp">
            <Link to={props.link}>
                <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
            </Link>
        </div>
        </Fragment>
    )
}

export default CardItems; 