import {blue, orange} from '@mui/material/colors'
import {PaletteOptions} from '@mui/material'
import {TypographyOptions} from '@mui/material/styles/createTypography'
import {createTheme} from '@mui/material/styles'

const
  darkPalette: PaletteOptions = {
    mode: 'dark',
    primary: blue,
    secondary: {
      main: orange['300']
    },
  },
  lightPalette: PaletteOptions = {
    background: {
      default: '#e0e0e0',
      paper: '#f0f0f0'
    },
    mode: 'light',
    primary: {
      main: blue['700']
    },
    secondary: {
      main: orange['800']
    },
  },
  typography: TypographyOptions = {
    /* eslint-disable sort-keys */
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    htmlFontSize: 16,
    h1: {
      fontSize: 48,
      fontWeight: 300,
    },
    h2: {
      fontSize: 36,
      fontWeight: 300,
    },
    h3: {
      fontSize: 30,
      fontWeight: 300,
    },
    h4: {
      fontSize: 24,
      fontWeight: 300,
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
    },
    overline: {
      fontSize: 14,
      fontWeight: 500,
    },
  }

export function createAppTheme() {
  return createTheme({
    colorSchemes: {
      light: {
        palette: lightPalette,
      },
      dark: {
        palette: darkPalette,
      },
    },
    typography
  })
}
