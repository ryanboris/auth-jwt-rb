import React, { Component } from 'react';
import Register from './Components/Register';
import './App.css';
import Jokes from './Components/Jokes';
import Unauthorized from './Components/Unauthorized';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faChevronLeft)



class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/api/jokes' component={Jokes} />
        <Route path='/signup' component={Register} />
        <Route path='/signin' component={Login} />
        <Route path='/unauthorized' component={Unauthorized} />
      </div>
    );
  }
}

export default App;
