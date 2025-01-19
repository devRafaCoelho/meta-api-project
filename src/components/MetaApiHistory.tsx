import React, { useState, useEffect } from 'react';
import { fetchOrdersForMonth } from '../services/metaApi';

const MetaApiHistory = ({ year, month }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const orders = await fetchOrdersForMonth(year, month);
      console.log(`Ordens para ${month}/${year}:`, orders);
      setData(orders);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [year, month]);

  return (
    <div>
      {!data && !error && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MetaApiHistory;
