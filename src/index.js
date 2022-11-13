import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AddToHomeScreen />
      <App />
    </BrowserRouter>
);

serviceWorkerRegistration.unregister();