import {createStore} from 'redux'
import reducer from './reducers'

const store = createStore(reducer);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers');
        store.replaceReducer(nextReducer);
    });
}

export default store;