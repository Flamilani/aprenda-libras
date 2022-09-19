import React, { Fragment } from 'react';
import RouteApp from './routes/routes';
import ShowHeader from './shared/locations/ShowHeader';
import ShowFooter from './shared/locations/ShowFooter';

import './global/styles.css';

function App() {
  return (
    <Fragment>
      <main>
         <ShowHeader />
        <article>
          <RouteApp />
        </article>
      </main>
        <ShowFooter />
    </Fragment>
  );
}

export default App;
