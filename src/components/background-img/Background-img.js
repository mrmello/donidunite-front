import React, { Component } from 'react';
import './Background-img.css';

class BackgroundIMG extends Component {
  render() {
    return (
      <img className="background-img" src={require('../../assets/donuts.jpg')} />
    );
  }
}

export default BackgroundIMG;
