import React, { Component } from 'react'
import Products from './section/Products'
import {Route, Routes} from 'react-router-dom'
import Details from './section/Details'

export default class Section extends Component {
    render() {
        return (
           <section>
               <Routes>
               <Route exact  path="/products" element={<Products/>} />
              <Route  path="/products/:id" element={<Details/>} />
               </Routes>
           
           
           </section>
        )
    }
}
