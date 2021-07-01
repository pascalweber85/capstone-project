import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function ImageSlider({ images = [], autoPlayTime = 6000 }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex

    setCurrentSlide(newSlideIndex)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, autoPlayTime)

    return () => clearTimeout(timer)
  })

  return (
    <Wrapper>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  margin-top: 45%;
`

const Slide = styled.div`
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
  height: 50%;
  width: 100%;
  transition: 800ms all ease-in-out;
`
