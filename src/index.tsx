import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from 'components/App';
import reducer, { RootState } from 'store/reducer';

export const store = createStore<RootState>(reducer);
const container = document.getElementById('root');

const run = () => {
    if (module.hot) {
        module.hot.accept('./components/App', () => {
            setImmediate(() => {
                const App = require('./components/App').default;
                ReactDOM.render(<App store={store}/>, container);
            });
        });
    }

    ReactDOM.render(<App store={store} />, container);
};

run();
