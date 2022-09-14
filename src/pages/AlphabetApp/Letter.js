import { Alphabet } from "../../shared/constants/alphabet.constant";
import { Link } from 'react-router-dom';

const LetterProps = () => {

    const cLetter = Alphabet;

    const listLetter = [];

    cLetter.forEach((list, index) => {
        listLetter.push(
            <span key={index}>
                <Link to={list.id}>
                    {list.letter}
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