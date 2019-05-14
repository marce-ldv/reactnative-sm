import { createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
	sagaMiddleware
];

export const store = createStore(
	persistedReducer,
	applyMiddleware( ...middlewares )
);

store.runSaga = sagaMiddleware.run;
store.runSaga( rootSagas );