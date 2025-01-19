import { ThemeProvider } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './theme/theme';
import Home from './pages/Home';

export default function MainRoutes() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/ranking" element={<Ranking />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myAccount" element={<MyAccount />} />  */}
      </Routes>
    </ThemeProvider>
  );
}
