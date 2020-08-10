import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#047dff',
    },
    secondary: {
      main: '#15D895',
    },
    text: {
      primary: '#36415A',
      secondary: '#9a6666',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiAvatar: {
      rounded: {
        borderRadius: '24px',
        width: '44px !important',
        height: '27px !important',
        padding: '3px',
        color: 'white !important',
        fontWeight: '600',
        background: '#15d895',
        fontSize: '15px !important',
        padding: '2px 10px',
        margin: '0 5px 0 0 !important',
        fontFamily: `'Work Sans', sans-serif`,
        lineHeight: '27px',
      }
    },
    MuiChip: {
      root: {
        padding: '6px !important',
        height: '41px',
        borderRadius: '50px'
      },
      label: {
        color: '#36415A',
        fontWeight: '400',
        borderRadius: '24px',
        padding: '0 !important',
        fontSize: '15px !important',
        fontFamily: `'Work Sans', sans-serif`,
      }
    }
  },
});