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

export const fetchOrdersForMonth = async (year: number, month: number) => {
  const connection = await connectToMetaApi();
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 1);

  try {
    const orders = await connection.getHistoryOrdersByTimeRange(
      startOfMonth,
      endOfMonth
    );
    return orders;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao buscar ordens: " + error.message);
    } else {
      throw new Error("Erro desconhecido ao buscar ordens.");
    }
  }
};

export const fetchDealsForMonth = async (year: number, month: number) => {
  const connection = await connectToMetaApi();
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 1);

  try {
    const deals = await connection.getDealsByTimeRange(
      startOfMonth,
      endOfMonth
    );
    return deals;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao buscar deals: " + error.message);
    } else {
      throw new Error("Erro desconhecido ao buscar deals.");
    }
  }
};

export const fetchDealsFromDate = async (startDate: Date) => {
  const connection = await connectToMetaApi();
  const endDate = new Date();

  try {
    const deals = await connection.getDealsByTimeRange(startDate, endDate);
    return deals;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao buscar deals: " + error.message);
    } else {
      throw new Error("Erro desconhecido ao buscar deals.");
    }
  }
};






