import React from 'react'
import Carousel from './Carousel'

export default function CarouselContainer() {

  const containerStyles = {
    width: '1400px',
    height: '75vh',
    margin: '0 auto',
  }
  return (
    <div style={containerStyles}>
      <Carousel parentWidth={1400}/>
    </div>
  )
}
