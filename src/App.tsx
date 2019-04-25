import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

// Pages
import Login from './pages/Login'

// Assets & Style
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div id="route-container">
            <img src={logo} className="App-logo" alt="logo" />
            <Login></Login>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
