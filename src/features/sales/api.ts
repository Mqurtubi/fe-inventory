import { http } from "../../services/http";
import type { SaleItemForm } from "./types";

const getSales = async () => {
  const salesResponse = await http.get("/sales");
  return salesResponse;
};

const getSale = async (id: string) => {
  const saleResponse = await http.get(`/sales/${id}`);
  return saleResponse;
};

const createSales = async (params: SaleItemForm) => {
  const salesResponse = await http.post("/sales", params);
  return salesResponse;
};

export { getSales, getSale, createSales };
