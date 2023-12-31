import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Carousel({ parentWidth}) {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const state  = useSelector(state => state.persistedReducer);
  const slides = useSelector(state => state?.persistedReducer?.data[2]?.slides);

  const containerStyles = {
    height: '75%',
    paddingTop: '5%',
    position: 'relative'
  };

  const carouselStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  };

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.2)'
  };

  const slidesContainerStyles = {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s'
  };

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...carouselStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    
    transform: `translateX(${-(currentIndex * parentWidth)}px)`
  });

  const slidesContainerOverflowStyles = {
    overflow: 'hidden',
    height: '100%'
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      let startingIndex = currentIndex;
      if (startingIndex <= 1) {
        setCurrentIndex(startingIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 2500);
    return () => clearTimeout(timer)
  },[currentIndex]);

  const goToImage = slideIndex => {
    setCurrentIndex(slideIndex)
  };


  return ( state.data.length  && slides.length ? (
    <div style={containerStyles} className='carousel'>
    <div style={slidesContainerOverflowStyles}>
      <div style={{...getSlidesContainerStylesWithWidth(), width: parentWidth * slides.length,}}>{
          slides.map((_, slideIndex) => (
            <div className='carousel-photo' key={slideIndex} style={{...getSlideStylesWithBackground(slideIndex), backgroundImage: `url(${slides[currentIndex].url})`}}></div>
          ))
        }
      </div>
    </div>
    <div style={dotsContainerStyles}>
      {slides.map((slide, slideIndex) => (
        <div className='carousel-button' style={dotStyles} key={slideIndex} onClick={() => goToImage(slideIndex)}>●</div>
      ))}
    </div>
  </div>
  ) :
  <div>Loading</div>
  )
}
