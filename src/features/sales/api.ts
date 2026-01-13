import { http } from "../../services/http";

const getSales = async () => {
  const salesResponse = await http.get("/sales");
  return salesResponse;
};

const createSales = async (params) => {
  const salesResponse = await http.post("/sales",params)
  return salesResponse
}

export { getSales, createSales };
