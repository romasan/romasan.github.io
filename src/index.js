import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import actions from './actions';
import { getRepos } from './gh_api';
const { setList } = actions;

getRepos('romasan').then(list => {
    list = list.filter(item => !['test', 'debug'].includes(item.name.split('-').shift()));
    store.dispatch(setList(list));
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('wrap')
);

module.hot.accept();
