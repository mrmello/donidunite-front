import React from 'react'
import RoundedImage from './roundedImage'

const RoundedImagesList = ({ images, alt}) => {
  if(images){
    return images.map( (image, i) => (
      <RoundedImage alt={`${alt} ${i}`} key={`${alt} ${i}`} image={image}/>
    ))
  } else {
    return null
  }
}

export default RoundedImagesList