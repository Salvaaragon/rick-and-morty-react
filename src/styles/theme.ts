import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c0d2f0',
    },
    secondary: {
      main: '#e9eff0',
    },
    error: {
      main: '#f50202',
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#545252',
      secondary: '#545252',
    },
  },
});

export default theme;
