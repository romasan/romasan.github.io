import types from './types.json';

export default {
    setList: list => ({
        type: types.SET_LIST,
        payload: list
    })
}