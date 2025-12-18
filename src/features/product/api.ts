import { http } from "../../services/http";
import type { ProductResponse } from "./type";

const getProduct = () => {
  return http.get<ProductResponse>("/product");
};
export { getProduct };
