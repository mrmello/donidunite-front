import React, { Component } from 'react';
import './Background-img.css';

const BackgroundIMG = () => {
  return (
    <div className="img-wrapper">
      <img alt="Doniduni-tê" className="background-img big" src={require('../../assets/donidunite1.png')} />
    </div>
  );
}

export default BackgroundIMG;
