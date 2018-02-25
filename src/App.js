import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios
      .get('/hello')
      .then((res) => {
        console.log(res);
      });
  }
  render() {
    return (
      <h1 className="App-title">Hello world!</h1>
    );
  }
}

export default App;
