import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './components/shared/Nav/Nav'
import Footer from './components/shared/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <main>BLOG HOME</main>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
