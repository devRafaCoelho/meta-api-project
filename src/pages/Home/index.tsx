import { Container, Typography } from '@mui/material';
import Header from '../../components/Header/index';

export default function Home() {
  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <Typography variant="h3">HOME</Typography>
      </Container>
    </>
  );
}
