import { http } from "../../services/http";
import type { StockValue } from "./types";
const getStocks = async () => {
  const stockResponse = await http.get("/stock");
  return stockResponse;
};

const inStock = async (stock: StockValue) => {
  const stockResponse = await http.post("/stock/in", stock);
  return stockResponse.data.data;
};

const outStock = async (stock: StockValue) => {
  const stockResponse = await http.post("/stock/out", stock);
  return stockResponse.data.data;
};

const adjustStock = async (stock: StockValue) => {
  const stockResponse = await http.post("/stock/adjust", stock);
  return stockResponse.data.data;
};

export { getStocks, inStock, outStock, adjustStock };
