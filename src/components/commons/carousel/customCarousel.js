
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const CustomCarousel = ({
  images,
  showStatus,
  showThumbs,
  showIndicators
}) => {
  if(images){
    return (
      <Carousel styles={styles}
        emulateTouch
        showStatus={showStatus}
        showThumbs={showThumbs}
        showIndicators={showIndicators}>
        {images.map((image, i) => (
          <div key={i}>
            <img src={image} alt={i}/>
          </div>
        ))}
      </Carousel>
    )
  } else {
    return null
  }
}

export default CustomCarousel