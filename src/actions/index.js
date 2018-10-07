import types from './constants.json';

export default {
    setList: list => ({
        type: types.SET_LIST,
        payload: list
    })
}