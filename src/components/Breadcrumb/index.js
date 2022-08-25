import { Link } from 'react-router-dom';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

export function Breadcrumb(props) {
    return (
        <div className={props.styles}>
            <Link className="linkTop" to="/">
                <BsArrowLeftSquareFill />
            </Link>
            <span>{props.title}</span>
        </div>
    )
}