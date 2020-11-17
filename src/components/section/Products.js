import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {dataContext} from '../Context'
import '../css/Products.css'
export default class Products extends Component {
  static contextType = dataContext
  render() {
    const {products} = this.context
   
    return (
      <div id="product">
        {
          products.map(item => (
            <div className="card" key={item._id}>
              <p> {item._id}</p>
              <Link to={`/products/${item._id}`}>
              <img src={item.src} alt=""/>
              </Link>
              <div className="content">
                <h3>
                <Link to={`/products/${item._id}`}>
                  {item.title}
                </Link>

                </h3>
                <span>
                  ${item.price}
                </span>
                <p> {item.description} </p>
                <button> ADD TO CART </button>
              </div>

            </div>
          ) )

        }
        
      </div>
    )
  }
}
