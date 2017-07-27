import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Components
import App from './App';

const Root = ({ store }) => (
    <Provider store={ store }>
        <Router history={ createBrowserHistory() }>
            <App/>
        </Router>
    </Provider>
);

export default Root;
