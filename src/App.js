import React from 'react'
import Product from "./containers/product"
export default class App extends React.Component{
    render(){
        return (
                <fieldset>
                    <legend>app</legend> 
                    <Product />
                </fieldset>
        )
    }
}