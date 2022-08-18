import Header from './components/Header';
import Footer from './components/Footer';
import RouteApp from './routes/routes';

import './global/styles.css';

function App() {
  return (
    <>
      <article>
        <Header />
        <main>
          <RouteApp />
        </main>
      </article>
      <Footer />
    </>
  );
}

export default App;
