import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { Store } from 'redux';

import createBrowserHistory from 'history/createBrowserHistory';

import { RootState } from 'store/reducer';

import './styles.scss';

interface Props {
    store: Store<RootState>;
}

const history = createBrowserHistory();

export default class App extends React.Component<Props> {

    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={() => <div>Hello world!</div>} />
                </Router>
            </Provider>
        );
    }
}
