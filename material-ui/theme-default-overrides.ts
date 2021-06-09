import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const materialTheme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, Helvetica Neue, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'black',
          color: '#fafafa',
        },
      },
    },
  },
});

export default materialTheme;
