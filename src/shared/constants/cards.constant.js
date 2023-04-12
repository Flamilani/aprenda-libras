import datilologia from '../../assets/imgs/datilologia.png';
import capa01 from '../../assets/imgs/capa01.png';
import capa02 from '../../assets/imgs/numeros.png';
// import capa03 from '../../assets/imgs/saudacoes.png';
import capa04 from '../../assets/imgs/linha-tempo.png';
import capa05 from '../../assets/imgs/quiz.png';
import capa06 from '../../assets/imgs/parametros-leg.png';
import { Level } from './level.constant';

const level = Level;

export const Cards = [
    /*     {
            link: "/apresentacao",
            title: "Apresentação",
            image: alfabeto,
        }, */
    {
        link: "/datilologia",
        title: "Datilologia",
        image: datilologia,
        levelId: level[0].id,
    },
    {
        link: "/nomes",
        title: "Nomes",
        image: capa01,
        levelId: level[0].id,
    },
    {
        link: "/numeros",
        title: "Números",
        image: capa02,
        levelId: level[0].id,
    },
    /*     {
            link: "/saudacoes",
            title: "Saudações",
            image: capa03,
            levelId: level[0].id,
        }, */
/*     {
        link: "/mapas",
        title: "Mapa",
        image: capa04,
        levelId: level[0].id,
    }, */
    {
        link: "/linhadetempo",
        title: "Linha de Tempo",
        image: capa04,
        levelId: level[0].id,
    },
    {
        link: "/iniciarquiz",
        title: "Quiz",
        image: capa05,
        levelId: level[0].id,
    },
    {
        link: "/parametros",
        title: "Parâmetros",
        image: capa06,
        levelId: level[0].id,
    },
]