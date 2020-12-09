export default  function (state,action){
    let {type,payload} = action
    switch(type){
        case "FETCH_PRODUCT_FAIL":
            return payload
        default :
            return null
    }
}
