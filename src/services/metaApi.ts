// services/metaApiService.js
import MetaApi from "metaapi.cloud-sdk";

const token = import.meta.env.VITE_TOKEN;
const accountId = import.meta.env.VITE_ACCOUNT_ID;

export const connectToMetaApi = async () => {
  const metaApi = new MetaApi(token);
  const account = await metaApi.metatraderAccountApi.getAccount(accountId);

  await account.waitConnected();
  const connection = account.getRPCConnection();

  await connection.connect();
  await connection.waitSynchronized();

  return connection;
};

export const fetchOrdersForMonth = async (year, month) => {
  const connection = await connectToMetaApi();
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 1);

  try {
    const orders = await connection.getHistoryOrdersByTimeRange(
      startOfMonth.toISOString(),
      endOfMonth.toISOString()
    );
    return orders;
  } catch (error) {
    throw new Error("Erro ao buscar ordens: " + error.message);
  }
};

export const fetchDealsForMonth = async (year, month) => {
  const connection = await connectToMetaApi();
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 1);

  try {
    const deals = await connection.getDealsByTimeRange(
      startOfMonth.toISOString(),
      endOfMonth.toISOString()
    );
    return deals;
  } catch (error) {
    throw new Error("Erro ao buscar deals: " + error.message);
  }
};


