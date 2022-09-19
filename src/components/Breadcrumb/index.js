import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

export function Breadcrumb(props) {
    return (
        <div className={props.styles}>
            <Link className="linkTop" to={props.link}>
                <BsArrowLeftSquareFill />
            </Link>
            <span>{props.title}</span>
        </div>
    )
}