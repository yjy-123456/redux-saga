import React,{Fragment} from 'react'
                      
export default class Product extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.fetchProduct()
        },1000)
    }
    render(){

        let {isFetching,product=[],err} = this.props.state

        if(isFetching){
            return (<h1>
                正在加载中。。。
            </h1>)
        }
        else if(!err){
            return (
                <Fragment>
                    <ul>
                        {product.map((item,index)=>{
                            return (
                                <li key={index}>
                                    商品名：
                                    {item.title}
                                    ||
                                    价格：
                                    {item.price}
                                </li>
                            )
                        })}
                    </ul>
                </Fragment>
            )
        }
        else {
            return (<h1>{err}</h1>)
        }
        
    }
}