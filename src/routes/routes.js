import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import NamesApp from '../pages/NamesApp';
import NumbersApp from '../pages/NumbersApp';
import QuizApp from '../pages/QuizApp/Quiz';
import ThirdApp from '../pages/ThirdApp';
import TimelineApp from '../pages/TimelineApp';

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
                element={<ThirdApp />}
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
        </Routes>)
}

export default RouteApp; 