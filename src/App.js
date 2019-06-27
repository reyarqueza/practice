import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 8
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.count}</h1>
        <button data-test="increment-button" onClick={() => this.setState({count: this.state.count + 1})
        }>Increment</button>
      </div>
    )
  }
}

export default App
