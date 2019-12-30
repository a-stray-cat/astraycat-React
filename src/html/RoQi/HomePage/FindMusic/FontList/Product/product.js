import React from 'react'

var ProductCss = require('./product.css')
export default class Product extends React.Component {
 
    render() {
        return (
            <div className={ProductCss.div}>
          <img className={ProductCss.img}  src={require('../../../../../../image/2 (3).jpg')} alt="标签" />
           <p className={ProductCss.p}>{this.props.Product.name}</p>
           <p className={ProductCss.p}>{this.props.Product.describe}</p>
            </div>
        )
    }
}