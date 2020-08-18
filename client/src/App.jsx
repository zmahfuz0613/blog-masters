import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './components/shared/Nav/Nav'
import Footer from './components/shared/Footer/Footer'
import Home from './screens/Home/Home'
import PostDetail from './screens/PostDetail/PostDetail'
import PostCreate from './screens/PostCreate/PostCreate'
import PostEdit from './screens/PostEdit/PostEdit'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-post" component={PostCreate} />
        <Route exact path="/edit-post/:id/edit" component={PostEdit} />
        <Route exact path="/:id" component={PostDetail} />
        </Switch>
      <Footer />
    </div>
  )
}

export default App
