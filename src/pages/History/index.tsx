import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ClickableChips from '../../components/Filters';
import Header from '../../components/Header';
import BasicTable from '../../components/Tables/HistoryTable';
import { fetchDealsFromDate } from '../../services/metaApi';

export default function History() {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(19);
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null); // Estado para o chip selecionado

  const fetchData = async () => {
    try {
      const startDate = new Date(year, month - 1, day);
      const orders = await fetchDealsFromDate(startDate);
      setData(orders.deals.filter((element) => element.entryType === 'DEAL_ENTRY_OUT'));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [year, month]);

  useEffect(() => {
    setSymbols([...new Set(data?.map((element) => element.symbol))]);
    console.log('filteredData', filteredData);
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
        {filteredData && filteredData.length > 0 ? (
          <BasicTable data={filteredData} />
        ) : (
          <Box>
            <Typography variant="h5">No results to show</Typography>
          </Box>
        )}
      </Container>
    </>
  );
}
