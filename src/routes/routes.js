import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NamesApp from '../pages/NamesApp';
import NumbersApp from '../pages/NumbersApp';
import QuizApp from '../pages/QuizApp/Quiz';
import GrettingApp from '../pages/GrettingApp';
import TimelineApp from '../pages/TimelineApp';
import FingerspellingApp from '../pages/AlphabetApp';
import AlphabetApp from '../pages/AlphabetApp/alphabet';
import DetailApp from '../pages/AlphabetApp/detail';
import SlidesApp from '../pages/SlidesApp';
import Slide01 from '../pages/SlidesApp/Slide01';
import DetailLetterApp from '../pages/AlphabetApp/detail-letter';

function RouteApp() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            ></Route>
            <Route
                path="/apresentacao"
                element={<SlidesApp />}
            ></Route>
            <Route
                path="/apresentacao/introducao"
                element={<Slide01 />}
            ></Route>
            <Route
                path="/datilologia"
                element={<FingerspellingApp />}
            ></Route>
            <Route
                path="/datilologia/:id"
                element={<DetailApp />}
            ></Route>
                        <Route
                path="/alfabeto"
                element={<AlphabetApp />}
            ></Route>
            <Route
                path="/alfabeto/:id"
                element={<DetailLetterApp />}
            ></Route>
            <Route
                path="/nomes"
                element={<NamesApp />}
            >
            </Route>
            <Route
                path="/numeros"
                element={<NumbersApp />}
            >
            </Route>
            <Route
                path="/saudacoes"
                element={<GrettingApp />}
            >
            </Route>
            <Route
                path="/linhadetempo"
                element={<TimelineApp />}
            >
            </Route>
            <Route
                path="/quiz"
                element={<QuizApp />}
            >
            </Route>
        </Routes>
    )
}

export default RouteApp; 