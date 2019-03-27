import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import { Store } from 'redux';

import createBrowserHistory from 'history/createBrowserHistory';

import Block from 'components/Block';
import BlockList from 'components/BlockList';
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
                    <Switch>
                        <Route path="/blocks/:blockHash/" component={Block} />
                        <Route path="/blocks/" component={BlockList} />
                        <Route path="/" component={() => <div>Hello world!</div>} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
