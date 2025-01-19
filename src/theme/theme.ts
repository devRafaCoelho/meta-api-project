import { createTheme } from '@mui/material';

export function getTheme() {
  return createTheme({
    palette: {
      mode: 'dark'
    },
    typography: {
      fontFamily: 'Nunito, sans-serif'
    }
  });
}
