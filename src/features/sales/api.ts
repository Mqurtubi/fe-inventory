import { http } from "../../services/http";

const getSales = async () => {
  const salesResponse = await http.get("/sales");
  return salesResponse;
};

export { getSales };
