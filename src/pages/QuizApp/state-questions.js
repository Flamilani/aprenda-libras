import imagem from './../../assets/gifs/boa-tarde.gif';

export const StateQuestions = {
    questions: {
        1: 'O que é Libras?',
        2: 'Qual sinal correto de casa',
        3: 'What planet gave birth to Superman?'
    },
    answers: {
        1: {
            1: 'A Línguas de Sinais é a língua natural da comunidade surda.',
            2: 'Mímicas e Gestos',
            3: 'Linguagem de Sinais'
        },
        2: {
            1: <img className="imgAnswer" src="https://catracalivre.com.br/wp-content/uploads/2015/11/librazuka.png" alt="Casa" />,
            2: <img className="imgAnswer" src={imagem} alt="Casa" />,
            3: 'Kalamata'
        },
        3: {
            1: 'Krypton',
            2: 'Mars',
            3: 'Saturn'
        }
    },
    correctAnswers: {
        1: '1',
        2: '1',
        3: '1'
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
}