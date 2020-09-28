import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"
import {
  CarouselProvider,
  Slider as CarouselSlider,
  Slide as CarouselSlide,
  ButtonBack as CarouselBack,
  ButtonNext as CarouselNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import { ReactComponent as SvgArrowRight } from "../../assets/images/icons/arrow-right.svg"

const slideGap = 15

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .carousel {
    &,
    &__slider,
    &__slider-tray-wrapper,
    &__slider-tray,
    &__slide,
    &__inner-slide {
      width: 100%;
      height: 100%;
      position: static;
    }

    &__slider {
      width: calc(100% + ${rem(slideGap)});
      position: relative;
      z-index: 1;
      margin: 0 ${rem(-slideGap / 2)};
    }

    &__slide {
      padding: 0 ${rem(slideGap / 2)};
    }

    &__slider-tray {
      will-change: transform;
    }

    &__inner-slide {
      position: relative;
    }
  }
`

const PrevNext = styled.div`
  button {
    width: 5em;
    height: 5em;
    padding: 1.5em;
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.3);

    @media ${({ theme }) => theme.mq.largeDown} {
      font-size: 0.75em;
    }

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.6);
    }

    &:active {
      margin-top: 1px;
      background-color: rgba(0, 0, 0, 1);
      transition: none;
    }

    &[disabled] {
      opacity: 0;
    }

    &.carousel__back-button {
      left: ${rem(20)};
      transform: translateY(-50%);

      svg {
        transform: scale(-1);
      }
    }

    &.carousel__next-button {
      right: ${rem(20)};
      transform: translateY(-50%);
    }

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
`

const Carousel = ({ slides, visibleSlides, ...props }) => {
  if (!slides || !slides.length) return null

  return (
    <Container {...props}>
      <CarouselProvider
        visibleSlides={visibleSlides || 1}
        totalSlides={slides.length}
      >
        <CarouselSlider aria-label="Carousel">
          {slides.map((slide, i) => (
            <CarouselSlide key={i}>{slide}</CarouselSlide>
          ))}
        </CarouselSlider>

        <PrevNext>
          <CarouselBack title="Previous">
            <SvgArrowRight aria-label="Previous" />
          </CarouselBack>

          <CarouselNext title="Next">
            <SvgArrowRight aria-label="Next" />
          </CarouselNext>
        </PrevNext>
      </CarouselProvider>
    </Container>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array,
  visibleSlides: PropTypes.number,
}

export default Carousel
