import React, { Component } from 'react';
import './Background-img.css';

class BackgroundIMG extends Component {
  render() {
    return (
      <div className="img-wrapper">
        <img className="background-img big" src={require('../../assets/donuts.jpg')} />
        <img className="background-img small" src={require('../../assets/donuts-medium.JPG')} />
      </div>
    );
  }
}

export default BackgroundIMG;
