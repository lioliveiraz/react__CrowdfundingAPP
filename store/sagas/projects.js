import { call, put } from 'redux-saga/effects';
import { fetchData } from '../../pages/api/fetchData/requests';
import { setProjects } from '../reducer';

export function* handleSetProjects(action) {
    try {
        const response = yield call(fetchData);
        yield put(setProjects(response));
    } catch (error) {
        console.log(error);
    }
}

