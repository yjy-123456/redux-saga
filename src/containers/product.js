import {connect} from "react-redux"
import Product from "../component/product"
import * as actions from "../store/actions/product"

// connect 将redux的状态通过props传递给组件，高阶组件
const mapStateToProps=(state)=>{
    // 返回值为props接受的属性和值，容器组件在此进行计算在传递给 UI组件
    return {
        state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchProduct(){
            dispatch(actions.getProduct())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)