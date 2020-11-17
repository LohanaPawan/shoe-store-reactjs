import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Products from './components/section/Products'
import Details from './components/section/Details'
export default class App extends Component {
  render() {
    return (
      <DataProvider>  
      <div className="app">
        <Router>
          <Header/>
          
          <Section />
        </Router>
      </div>
      </DataProvider>
    )
  }
}
