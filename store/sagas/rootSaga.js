import { takeLatest } from 'redux-saga/effects';
import { handleSetProjects } from './projects';
import { SET_PROJECTS } from '../reducer';


export default function* watcherSaga() {
    yield takeLatest(SET_PROJECTS, handleSetProjects);

}