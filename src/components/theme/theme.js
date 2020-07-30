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
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1920,
      xs: 0,
    }
  },
  overrides: {
    MuiAvatar: {
      rounded: {
        borderRadius: '24px',
        width: '44px !important',
        padding: '3px',
        color: 'white !important',
        fontWeight: '700',
        background: '#15d895',
        fontSize: '15px'
      }
    },
    MuiChip: {
      root: {
        paddingRight: '5px !important',
        height: '41px',
        padding: '3px',
        borderRadius: '50px'
      },
      label: {
        color: '#36415A',
        fontWeight: '500',
        borderRadius: '24px',
        padding: '7px',
        fontSize: '15px !important'
      }
    }
  },
});