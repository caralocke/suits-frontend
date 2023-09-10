import React, { useEffect, useState } from 'react'

export default function Carousel({parentWidth}) {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const slides = [
    {url: 'https://flxt.tmsimg.com/assets/p8630071_i_h8_ap.jpg', title: 'Suits1'},
    {url: 'https://deadline.com/wp-content/uploads/2018/01/download-suits-season-7.jpg', title: 'Suits2'},
    {url: 'https://www.usanetwork.com/sites/usablog/files/2022/06/suits-cast.jpg', title: 'Suits3'}
  ];

  const containerStyles = {
    height: '100%',
    position: 'relative'
  };

  const carouselStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
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
    width: parentWidth * slides.length,
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
    }, 3500);
    return () => clearTimeout(timer)
  },[currentIndex]);

  const handlePrevious = () => {
    const firstImage = currentIndex === 0;
    const newIndex = firstImage ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  };

  const handleNext = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  };

  const goToImage = slideIndex => {
    setCurrentIndex(slideIndex)
  };


  return (
    <div style={containerStyles} className='carousel'>
      <div style={leftArrowStyles} onClick={handlePrevious}>⇦</div>
      <div style={rightArrowStyles} onClick={handleNext}>⇨</div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>{
            slides.map((_, slideIndex) => (
              <div className='carousel-photo' key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}></div>
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
  )
}

// <div style={carouselStyles}></div>