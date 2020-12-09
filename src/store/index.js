import {createStore,applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducers from "./reducers"
// 引入 saga中间件创造函数
import createSagaMiddleware from "redux-saga"
import helloSaga from "../sagas/hello"
// 生成saga中间件
let sagaMiddleware =createSagaMiddleware()

export default createStore(rootReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(helloSaga)