
export default  function (state,action){
    let {type,payload} = action
    switch(type){
        case "FETCH_PRODUCT_SUCCESS":
            return false
        case "FETCH_PRODUCT_FAIL":
            return false
        default :
            return true
    }
}
