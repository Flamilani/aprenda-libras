import { FaAddressBook } from 'react-icons/fa';
import foto01 from '../../assets/imgs/timeline/socrates.jpg';
import foto02 from '../../assets/imgs/timeline/ponce-leon.jpg';
import foto03 from '../../assets/imgs/timeline/juan.jpg';
import foto04 from '../../assets/imgs/timeline/charles-leppe.jpg';
import foto05 from '../../assets/imgs/timeline/e-huet.jpg';
import foto06 from '../../assets/imgs/timeline/flausino.jpg';

export const Timeline = [
    {
        id: 1,
        date: "368 a.C.",
        icon: <FaAddressBook />,
        title: "Sócrates",
        subtitle: "Filósofo Grego",
        content: 
        <p>O documento mais antigo que tinha escrito sobre Língua de Sinais pelo filósofo grego Sócrates, 
        quando perguntou ao seu aluno Cratylus de Plato: <br />
        <strong><i>"Imagine que nós, os seres humanos, quando não falávamos e queríamos indicar 
        as coisas às outras, nós a fazíamos, como os surdos fazem sinais com as mãos,
        cabeça e outras partes do corpo?"</i></strong></p>,
        image: foto01,
        imgStyle: "imgTimeline"
    },
    {
        id: 2,
        date: "1520-1584",
        icon: <FaAddressBook />,
        title: "Pedro Ponce de Leon",
        subtitle: "Professor espanhol de Surdos",
        content: <p>Ponce de Léon inventou o primeiro
        alfabeto manual conhecido, publicado por
        Juan M. Pablo Bonet em 1620 em um livro
        intitulado: <strong><i>"Reduccion de las letras y
        artes para enseñar a hablar a los mudos"</i></strong>.</p>,
        image: foto02,
        imgStyle: "imgTimeline"
    },
    {
        id: 3,
        date: "1579-1633",
        icon: <FaAddressBook />,
        title: "Juan Pablo Bonet",
        subtitle: "Criador de alfabeto manual",
        content: 
        `Na Espanha, Juan Pablo Bonet  publicou o primeiro livro de Educação de Surdos 
        em 1620 onde registrou o alfabeto manual.`,
        image: foto03,
        imgStyle: "imgTimelineH"
    },
    {
        id: 4,
        date: "1775",
        icon: <FaAddressBook />,
        title: "Abade Charles M. De L'Epée",
        subtitle: "Primeiro a estudar uma língua de sinais usada por Surdos",
        content: 
        `Pesquisava um tipo de comunicação apoiada no canal visual-
        gestual, que era muito satisfatória.           
        L'Epée fundou a primeira escola dos Surdos na França,
        onde professores e alunos usavam os sinais metódicos.
        Divulgava seus trabalhos em cada reunião e apresentou-se para discutir seus resultados.`,
        image: foto04,
        imgStyle: "imgTimeline"
    },
    {
        id: 5,
        date: "1855",
        icon: <FaAddressBook />,
        title: "Ernest Huet",
        subtitle: "Professor Surdo francês que veio ao Brasil para ensinar os Surdos",
        content: 
        <p>E. Huet lutou e conseguiu junto ao Imperador
        Dom Pedro II apoio para fundar a primeira Escola para Surdos
        no Brasil, na cidade do Rio de Janeiro, o INES - Instituto Nacional
        de Educação de Surdos, no dia 26 de setembro de 1857.</p>,
        image: foto05,
        imgStyle: "imgTimeline"
    },
    {
        id: 6,
        date: "1875",
        icon: <FaAddressBook />,
        title: "Flausino José da Gama",
        subtitle: "Aluno do Instituto de Surdos",
        content: 
        <p>O livro de <strong>Iconografia dos Signaes dos Surdos-Mudos</strong> foi
        publicado por 1875, foi feito por um ex-aluno do Instituto de
        Surdos, Flausino José da Gama que foi contratado por esta escola
        para ser um Repetidor, ensinado  aos seus colegas, em Língua de
        Sinais Brasileira, no Brasil.</p>,
        image: foto06,
        imgStyle: "imgTimeline"
    }
]