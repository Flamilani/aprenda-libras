import imagem from './../../assets/gifs/boa-tarde.gif';

export const StateQuestions = {
    questions: {
        1: <div>Escolha uma alternativa correta do nome: <br /> <div className="fontLibrasC fontSize">Priscila</div></div>,
        2: <div>Escolha uma alternativa correta do número de celular: <br /> <div className="fontLibrasA fontSizeB">98124 7789</div></div>,
        3: <div>Escolha uma alternativa correta do sinal de saudação: <br /><div className="divQuestion"><img className="imgQuestion" src={imagem} alt="Imagem" /></div></div>
    },
    answers: {
        1: {
            1: 'Patricia',
            2: 'Priscila',
            3: 'Pedro'
        },
        2: {
            1: '99031 7789',
            2: '99121 7780',
            3: '98124 7789'
        },
        3: {
            1: 'Boa tarde, estou trabalhando',
            2: 'Bom dia, estou tomando café',
            3: 'Boa noite, vou dormir. Tchau!'
        }
    },
    correctAnswers: {
        1: '2',
        2: '3',
        3: '1'
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
}