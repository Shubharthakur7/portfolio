import { createTheme } from '@mui/material/styles';
import { deepPurple, amber, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: grey[100], // Light grey background
    },
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: {
      fontWeight: 700,
      color: deepPurple[600],
    },
    h4: {
      fontWeight: 600,
      color: deepPurple[700],
    },
    body1: {
      color: grey[800],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: grey[50],
        },
      },
    },
  },
});

export default theme;
