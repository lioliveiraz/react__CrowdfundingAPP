import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import projectReducer from './reducer';

const reducer = combineReducers({
    projects: projectReducer,
});

export const makeStore = (context => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
});

export const wrapper = createWrapper(makeStore, { debug: true });