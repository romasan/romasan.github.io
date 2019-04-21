import types from '../actions/constants.json';

const actions = {
    [types.SET_LIST]: (state, payload) => {
        return {
            ...state,
            list: payload
                .filter(({ name, homepage }) => (
                    console.log('%c/' + name, 'color:' + (homepage ? 'green' : 'grey')),
                    homepage
                ))
        };
    }
};

export default (state = {
    list: []
}, action) => (actions[action.type] ? actions[action.type](state, action.payload) : state);
