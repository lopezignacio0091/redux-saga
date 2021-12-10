import { put, call, takeLatest } from 'redux-saga/effects';
import { types } from '../../const/types';
import { apiCall } from '../api';

export function* getUsers(payload) {
    try {

        const results = yield call(apiCall, 'GET',types.GET_USER_API + '/users');
        console.log(results);

        yield put({ type: types.SET_USERS, payload: results });

    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

export function* postHeroes(payload) {
    try {

        const { results } = yield call(apiCall, 'GET', types.GET_HEROES_API);

        yield put({ type: types.SET_HEROES, payload: results });

    } catch (error) {
        const errorMsj = `Error en api: ${error}`;
        yield put({ type: types.SET_ERROR, payload: errorMsj });
    }
}

//watcher de redux saga
//toma como parametro la nombre de la accion que se ejecuta y el metodo a ejecutar
export default function* heroes() {
    yield takeLatest(types.GET_USERS, getUsers);
    //yield takeLatest(types.GET_HEREO_BY_ID, postHeroes);
}
