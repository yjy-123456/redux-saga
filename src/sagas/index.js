import hellosaga from "./hellosaga"
import product from "./product"
import {all} from "redux-saga/effects"

export default function *(){
    // all只执行一次参数数组中的saga函数
    yield all([hellosaga(),product()])
}