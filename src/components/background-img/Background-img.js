import React, { Component } from 'react';
import './Background-img.css';

class BackgroundIMG extends Component {
  render() {
    return (
      <div className="img-wrapper">
        <img alt="Doniduni-tê" className="background-img big" src={require('../../assets/donuts.jpg')} />
        <img alt="Doniduni-tê" className="background-img small" src={require('../../assets/donuts-medium.JPG')} />
      </div>
    );
  }
}

export default BackgroundIMG;
