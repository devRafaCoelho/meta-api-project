import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';

export default function Live() {
  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <Typography variant="h3">Live</Typography>
      </Container>
    </>
  );
}
