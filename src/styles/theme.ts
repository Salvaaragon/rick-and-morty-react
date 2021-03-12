import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bbda59',
    },
    secondary: {
      main: '#0daec2',
      dark: '#0c5961',
    },
    error: {
      main: '#f50202',
    },
    background: {
      default: '#f2f2f2',
    },
    text: {
      primary: '#545252',
      secondary: '#545252',
    },
  },
  typography: {
    fontFamily: [
      'Raleway Black',
      'Raleway Black Italic',
      'Raleway Bold',
      'Raleway Bold Italic',
      'Raleway Extra Bold',
      'Raleway Extra Bold Italic',
      'Raleway Extra Light',
      'Raleway Extra Light Italic',
      'Raleway Italic',
      'Raleway Light',
      'Raleway Light Italic',
      'Raleway Medium',
      'Raleway Medium Italic',
      'Raleway',
      'Raleway SemiBold',
      'Raleway SemiBold Italic',
      'Raleway Thin',
      'Raleway Thin Italic',
    ].join(','),
  },
});

export default theme;
