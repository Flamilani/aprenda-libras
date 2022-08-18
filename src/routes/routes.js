import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import FirstApp from '../pages/FirstApp';
import SecondApp from '../pages/SecondApp';
import ThirdApp from '../pages/ThirdApp';

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
                element={<FirstApp />}
                exact
            >
            </Route>
            <Route 
                path="/numeros"
                element={<SecondApp />}
                exact
            >
            </Route>
            <Route 
                path="/saudacoes"
                element={<ThirdApp />}
                exact
            >
            </Route>
        </Routes>)
}

export default RouteApp; 