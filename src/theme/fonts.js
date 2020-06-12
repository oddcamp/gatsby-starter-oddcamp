import { css } from "styled-components"

const families = {
  primary: `"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif`,
  secondary: `"Bodoni MT", "Didot", "Didot LT STD", "Hoefler Text", "Garamond", "Times New Roman", serif`,
}

const weights = {
  primary: {
    normal: 400,
    bold: 700,
  },
  secondary: {
    normal: 400,
  },
}

const set = (family, weight) => {
  try {
    return css`
      font-family: ${families[family]};
      font-weight: ${weights[family][weight]};
    `
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(`Undefined font family/weight`, e.message, e.name)
  }
}

export default {
  set,
}
