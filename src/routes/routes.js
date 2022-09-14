import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NamesApp from '../pages/NamesApp';
import NumbersApp from '../pages/NumbersApp';
import QuizApp from '../pages/QuizApp/Quiz';
import GrettingApp from '../pages/GrettingApp';
import TimelineApp from '../pages/TimelineApp';
import AlphabetApp from '../pages/AlphabetApp';
import DetailApp from '../pages/AlphabetApp/detail';
import SlidesApp from '../pages/SlidesApp';

function RouteApp() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            ></Route>
            <Route
                path="/introducao"
                element={<SlidesApp />}
            ></Route>
            <Route
                path="/alfabeto"
                element={<AlphabetApp />}
            ></Route>
            <Route
                path="/alfabeto/:id"
                element={<DetailApp />}
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
            {/*             <Route 
                path="/mapa"
                element={<MapsApp />}
                exact
            >
            </Route>
            <Route 
                path="/mapa-brasil"
                element={<MapsBrazilApp />}
                exact
            >
            </Route> */}
        </Routes>)
}

export default RouteApp; 