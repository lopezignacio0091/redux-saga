import { all } from 'redux-saga/effects';
import users from './users';

//permite ejecutar los watchers de todas las sagas
export default function* rootSaga() {
    yield all([
        users(),
        // laotrasaga
    ]);
}