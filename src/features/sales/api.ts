import { http } from "../../services/http";
import type { SaleItemForm } from "./types";

const getSales = async (search?: string) => {
  const salesResponse = await http.get("/sales", {
    params: search ? { search } : {},
  });
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
