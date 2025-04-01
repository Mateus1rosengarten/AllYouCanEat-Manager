import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f4f4f4',
    },
  },

  typography: {
    fontFamily: 'Lato, sans-serif',
    h5: {
      fontWeight: '500',
      fontSize: '1.2rem',
      color: '#333333',
      letterSpacing: '0.05rem',
    },
    h4: {
      fontSize: '1.8rem',
      color: '#333333',
      letterSpacing: '0.1rem',
      fontWeight: 'bold',
    },

    body1: {
      fontStyle: 'italic',
      fontWeight: '300',
      fontSize: '0.8rem',
      color: '#000000B0',
    },
  },
  spacing: 4,

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: '80vw',
          height: '8vh',
          borderRadius: '15px',
          fontSize: '1rem',
          letterSpacing: '0.3rem',
          backgroundColor: '#2e7d32',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '5px',
          color: '#6b6b6b',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: '92vw',
          margin: '0 auto 2vh auto',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#424242',
        },
      },
    },
  },
});

export const boxTheme = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '8vh',
  gap: '4vh',
};

export default theme;
