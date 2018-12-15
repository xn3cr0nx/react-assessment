import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "reducers";
import RootMiddleware from "middleware";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootMiddleware);

export { store };
