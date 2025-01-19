import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ClickableChips from '../../components/Filters';
import BasicTable from '../../components/Tables/HistoryTable';
import { fetchDealsForMonth, fetchOrdersForMonth } from '../../services/metaApi';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1);

  const fetchData = async () => {
    try {
      const orders = await fetchDealsForMonth(year, month);
      setData(orders.deals);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
    console.log('year', year);
  }, [year, month]);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
      <Typography variant="h3">HOME</Typography>
      <ClickableChips setYear={setYear} />
      <BasicTable data={data} />
    </Container>
  );
}
