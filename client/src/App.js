import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Navbar from './components/NavBar'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/Books'  component={ () => <Search />} />
          <Route path='/Saved'  component={ () => <Saved />} />
          <Route path='/'  component={ () => <Home />} />
          <Redirect to='/' component={ () => <Home />}/>
        </Switch>
      </>
    )
  }
}

export default App;
