import { textColor, calculateTertiaryColor } from './colors';

export const primaryFont = 'Open Sans, sans-serif';
export const secondaryFont = 'Sofia, sans-serif';

export const headingOne = {
  fontFamily: secondaryFont,
  fontSize: {
    desktop: '3.75rem',
    mobile: '2rem'
  },
  fontWeight: 'normal',
  color: textColor
}

export const headingTwo = {
  fontFamily: secondaryFont,
  fontSize: {
    desktop: '3rem',
    mobile: '1.75rem'
  },
  fontWeight: 'normal',
  color: textColor
}

export const headingThree = {
  fontFamily: secondaryFont,
  fontSize: {
    desktop: '2rem',
    mobile: '1.25rem'
  },
  fontWeight: 'normal',
  color: textColor
}

export const navigationHeading = {
  fontFamily: secondaryFont,
  fontSize: {
    desktop: '1.5rem',
    mobile: '1.5rem'
  },
  fontWeight: 'normal',
  color: textColor
}

export const formInputText = {
  fontFamily: primaryFont,
  fontSize: {
    desktop: '1.5rem',
    mobile: '1rem'
  },
  fontWeight: 'bold',
  color: calculateTertiaryColor(0)
}

export const usernameText = {
  fontFamily: secondaryFont,
  fontSize: {
    desktop: '1.25rem',
    mobile: '1rem'
  },
  fontWeight: 'normal',
  color: textColor
}

export const bodyIntroText = {
  fontFamily: primaryFont,
  fontSize: {
    desktop: '1rem',
    mobile: '1rem'
  },
  fontWeight: 'bold',
  color: calculateTertiaryColor(0)
}

export const mediumText = {
  fontFamily: primaryFont,
  fontSize: {
    desktop: '1rem',
    mobile: '1rem'
  },
  fontWeight: 'normal',
  color: textColor
}

export const smallText = {
  fontFamily: primaryFont,
  fontSize: {
    desktop: '0.75rem',
    mobile: '0.75rem'
  },
  fontWeight: 'normal',
  color: textColor
}