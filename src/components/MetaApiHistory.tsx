import React, { useState, useEffect } from "react";
import MetaApi from "metaapi.cloud-sdk";

const accountId = import.meta.env.VITE_ACCOUNT_ID;
const token = import.meta.env.VITE_TOKEN;

  const MetaApiHistory = () => {
    const [data, setData] = useState(null);
  
    const connectToMetaApi = async () => {
      const metaApi = new MetaApi(token);
      const account = await metaApi.metatraderAccountApi.getAccount(accountId);
  
      await account.waitConnected();
      const connection = account.getRPCConnection();
  
      await connection.connect();
      await connection.waitSynchronized();
  
      return connection;
    };
  
    const fetchData = async () => {
      const connection = await connectToMetaApi();
  
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  
      try {
        const orders = await connection.getHistoryOrdersByTimeRange(
          startOfMonth.toISOString(),
          endOfMonth.toISOString()
        );
        console.log("Ordens do mês atual:", orders);
        setData(orders);
      } catch (error) {
        console.error("Erro ao buscar ordens:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div>
        {!data && <p>Loading...</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    );
  };
  
  export default MetaApiHistory;
