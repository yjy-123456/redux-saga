import product from "./product"

let defaultState={
    product:[]
}

export default  function Reducer(state=defaultState,action){
    return {
        product:product(state.product,action)
    }
}