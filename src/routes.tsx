import { ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './theme/theme';
import Home from './pages/Home';
import History from './pages/History';
import Live from './pages/Live';

export default function MainRoutes() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </ThemeProvider>
  );
}
