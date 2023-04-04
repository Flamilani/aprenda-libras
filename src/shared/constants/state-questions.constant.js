import imagem from './../../assets/imgs/timeline/e-huet.jpg';

export const StateQuestions = {
    questions: {
        1: <div>Qual nome do filósofo grego que escreveu sobre Língua de Sinais?</div>,
        2: <div>Quem é esse personagem que foi diretor do Instituto Nacional de Educação de Surdos (INES)? <br />
            <div className="divQuestion"><img className="imgQuestion" src={imagem} alt="Imagem" /></div></div>,
        3: <div>Quem fundou a primeira escola dos Surdos na França?</div>,
        4: <div className="center">Qual alternativa correta? <br />            
        <span className="fontLibrasA fontSize">5</span> + 
        <span className="fontLibrasA fontSize">4</span> = ?
        </div>
    },
    answers: {
        1: {
            1: <span className="fontLibrasA fontSize">Aristoteles</span>,
            2: <span className="fontLibrasA fontSize">Eufreu</span>,
            3: <span className="fontLibrasA fontSize">Platao</span>,
            4: <span className="fontLibrasA fontSize">Socrates</span>
        },
        2: {
            1: <span className="fontLibrasA fontSize">Pedro Ponce</span>,
            2: <span className="fontLibrasA fontSize">Dom Pedro II</span>,
            3: <span className="fontLibrasA fontSize">Ernest Huet</span>,
            4: <span className="fontLibrasA fontSize">Dom Joao VI</span>
        },
        3: {
            1: <span className="fontLibrasA fontSize">L Epee</span>,
            2: <span className="fontLibrasA fontSize">Juan Pablo</span>,
            3: <span className="fontLibrasA fontSize">Flausino</span>,
            4: <span className="fontLibrasA fontSize">Fabiano</span>
        },
        4: {
            1: <span className="fontLibrasA fontSize">8</span>,
            2: <span className="fontLibrasA fontSize">9</span>,
            3: <span className="fontLibrasA fontSize">7</span>,
            4: <span className="fontLibrasA fontSize">3</span>
        }
    },
    correctAnswers: {
        1: '4',
        2: '3',
        3: '1',
        4: '2'
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
}