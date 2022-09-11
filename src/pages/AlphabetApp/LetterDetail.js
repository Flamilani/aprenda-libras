import { Alphabet } from "./alphabet.constant";
import { Link } from 'react-router-dom';

const LetterDetail = (props) => {

    const cLetter = Alphabet.letter;

    const listLetter = [];

    cLetter.forEach((list, index) => {
        listLetter.push(
            <span key={index}>
                <Link to={props.list}>
                    {props.list}
                </Link>
            </span>
        )
    });

    return (
        <>
            {listLetter}
        </>
    )
}

export default LetterDetail; 