import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { fetchDealsForMonth } from '../../services/metaApi';
import BasicTable from '../../components/Tables/HistoryTable';
import ClickableChips from '../../components/Filters';

export default function History() {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1);
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null); // Estado para o chip selecionado

  const fetchData = async () => {
    try {
      const orders = await fetchDealsForMonth(year, month);
      setData(orders.deals);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [year, month]);

  useEffect(() => {
    setSymbols([...new Set(data?.map((element) => element.symbol))]);
  }, [data]);

  const filteredData = selectedSymbol
    ? data?.filter((deal) => deal.symbol === selectedSymbol)
    : data;

  return (
    <>
      <Header />

      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <Typography variant="h3" sx={{ marginBottom: 5 }}>
          History Deals
        </Typography>
        <ClickableChips symbols={symbols} setSelectedSymbol={setSelectedSymbol} />
        <BasicTable data={filteredData} />
      </Container>
    </>
  );
}
