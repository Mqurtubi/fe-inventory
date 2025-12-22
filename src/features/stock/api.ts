import { http } from "../../services/http";

const getStocks = async () => {
  const stockResponse = await http.get("/stock");
  return stockResponse;
};

export { getStocks };
