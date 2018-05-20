import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer/index.js';
import mySaga from './saga'
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
export default store