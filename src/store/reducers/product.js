
export default  function (state,action){
    let {type,payload} = action
    switch(type){
        case "FETCH_PRODUCT_SUCCESS":
            return [...payload]
        default :
            return []
    }
}
