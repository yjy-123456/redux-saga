import * as types from  "../types"

const createAction =type => payload =>({type,payload})
// 开始发送请求
export const getProduct = createAction(types.FETCH_PRODUCT)
// 正在获取商品
export const getProduct = createAction(types.FETCH_PRODUCT_REQ)
// 获取商品成功
export const getProduct = createAction(types.FETCH_PRODUCT_SUCCESS)
// 获取商品失败
export const getProduct = createAction(types.FETCH_PRODUCT_FAIL)


