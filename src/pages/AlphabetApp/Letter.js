import { Alphabet } from "./alphabet.constant";
import { Link } from 'react-router-dom';

const LetterProps = () => {

    const cLetter = Alphabet.letter;

    const listLetter = [];

    cLetter.forEach((list, index) => {
        listLetter.push(
            <span key={index}>
                <Link to={list}>
                    {list}
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

export default LetterProps; 