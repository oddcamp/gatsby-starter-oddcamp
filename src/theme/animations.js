import { keyframes } from "styled-components"
import { rem } from "polished"

// common animations (keyframes)

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const slideInY = (pos = 20) => keyframes`
  0% {
    transform: translateY(${rem(pos)});
  }

  100% {
    transform: translateY(0);
  }
`

const slideInX = (pos = 20) => keyframes`
  0% {
    transform: translateX(${rem(pos)});
  }

  100% {
    transform: translateY(0);
  }
`

export default {
  fadeIn,
  slideInY,
  slideInX,
}
