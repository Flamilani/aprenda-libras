import { Link } from "react-router-dom";

const Buttons = (props) => {
    return (
        <div className="option-letter spaceBottom">
            {props.type === 'datilologia' &&
                <>
                    <Link to={props.redirect}>
                        <span className="fontLibrasA fontSizeA">
                            ABC
                        </span>
                    </Link>
                    <span className="fontSizeB fontBack">
                        ABC
                    </span>
                </>
            }
            {props.type === 'alfabeto' &&
                <>
                    <span className="fontLibrasA fontSizeA fontBack">
                        ABC
                    </span>
                    <Link to={props.redirect}>
                        <span className="fontSizeB">
                            ABC
                        </span>
                    </Link>
                </>
            }

        </div>
    )
}
export default Buttons;