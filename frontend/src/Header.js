import React, { Component } from "react"
import "./App.css"

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to {this.props.name}</h1>
      </header>
    )
  }
}

export default Header
