import product from "./product"
import err from "./err"
import isFetching from "./isFetching"


let defaultState={
    product:[],
    isFetching:true,
    err:null
}

export default  function Reducer(state=defaultState,action){
    return {
        product:product(state,action),
        isFetching:isFetching(state,action),
        err:err(state,action)
    }
}