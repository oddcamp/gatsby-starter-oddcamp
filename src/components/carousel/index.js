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

import { ReactComponent as SvgChevronLeft } from "../../assets/images/icons/chevron-left.svg"
import { ReactComponent as SvgChevronRight } from "../../assets/images/icons/chevron-right.svg"

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
    width: 2.5em;
    height: 2.5em;
    padding: 0.8em;
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transition: background-color 0.2s ${({ theme }) => theme.easings.default};

    @media ${({ theme }) => theme.mq.largeDown} {
      font-size: 0.75em;
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.metallic};
    }

    &:active {
      margin-top: 1px;
      background-color: ${({ theme }) => theme.colors.black};
      transition: none;
    }

    &[disabled] {
      opacity: 0;
    }

    &.carousel__back-button {
      padding-right: 0.9em;
      left: 0;
      transform: translate(-50%, -50%);
      box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);

      @media ${({ theme }) => theme.mq.xxlargeDown} {
        transform: translate(-25%, -50%);
      }
    }

    &.carousel__next-button {
      padding-left: 0.9em;
      right: 0;
      transform: translate(50%, -50%);
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

      @media ${({ theme }) => theme.mq.xxlargeDown} {
        transform: translate(25%, -50%);
      }
    }

    /* expands tap area */
    &::before {
      content: "";
      width: ${rem(50)};
      height: ${rem(50)};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
          <CarouselBack title="Previous" aria-label="Previous">
            <SvgChevronLeft />
          </CarouselBack>

          <CarouselNext title="Next" aria-label="Next">
            <SvgChevronRight />
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
