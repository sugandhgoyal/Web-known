import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
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
      },
      label: {
        background: '#15d895',
        color: 'white',
        fontWeight: '700',
        borderRadius: '24px',
        margin: '0 10px',
        padding: '7px',
        fontSize: '15px !important'
      }
    }
  },
});