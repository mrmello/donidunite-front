import React, { Component } from 'react';
import './App.css';
import Notice from '../notice/Notice';
import BackgroundIMG from '../background-img/Background-img';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackgroundIMG />
        <Notice />
      </div>
    );
  }
}

export default App;
