import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NamesApp from '../pages/NamesApp';
import NumbersApp from '../pages/NumbersApp';
import QuizApp from '../pages/QuizApp/Quiz';
import GrettingApp from '../pages/GrettingApp';
import TimelineApp from '../pages/TimelineApp';
import MapsApp from '../pages/MapsApp/MapMundi';
import MapsBrazilApp from '../pages/MapsApp/MapBrasil';

function RouteApp() {
    return (
        <Routes>
            <Route 
                path="/"
                element={<Home />}
                exact
            ></Route>
            <Route 
                path="/nomes"
                element={<NamesApp />}
                exact
            >
            </Route>
            <Route 
                path="/numeros"
                element={<NumbersApp />}
                exact
            >
            </Route>
            <Route 
                path="/saudacoes"
                element={<GrettingApp />}
                exact
            >
            </Route>
            <Route 
                path="/linhadetempo"
                element={<TimelineApp />}
                exact
            >
            </Route>
            <Route 
                path="/quiz"
                element={<QuizApp />}
                exact
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