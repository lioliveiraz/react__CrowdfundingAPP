import { takeLatest } from 'redux-saga/effects';
import { handleSetProjects } from './projects';
import { GET_PROJECTS } from '../reducer';


export default function* watcherSaga() {

    yield takeLatest(GET_PROJECTS, handleSetProjects);

}