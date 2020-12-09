import {put,call,takeLatest} from "redux-saga/effects"
import {getProductApi} from "../api"
import * as actions from "../store/actions/product"

export default function *watchAction(){
    // 拦截名为FETCH_PRODUCT的action，此时才能并调用第二个函数参数执行
    yield takeLatest("FETCH_PRODUCT",getProductData)
    // console.log("watch触发");
}

function *getProductData(){
    // 发送 正在获取数据 action
    // put 相当于dispatch，用来发送action 
    yield put(actions.getProductReq())

    try{
        // call 可以调用请求的api，和普通call相似
        let res=yield call(getProductApi,"call传递的参数")
        // 请求成功，发送成功action
        yield put(actions.getProductSuccess(res.data))
    }catch(err){
        err=err.toString()
        console.log(err);
        yield put(actions.getProductFail(err))
    }
}