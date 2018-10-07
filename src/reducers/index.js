import types from '../actions/types.json';

const actions = {
    [types.SET_LIST]: (state, payload) => {
        return {...state, list: payload};
    }
};

export default (state = {
    list: []
}, action) => (actions[action.type] ? actions[action.type](state, action.payload) : state);
