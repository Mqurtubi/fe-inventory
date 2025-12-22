import { http } from "../../services/http";
import type { ProductResponse, GetProductParams } from "./type";

const getProducts = (params?: GetProductParams) => {
  return http.get<{ data: ProductResponse }>("/product", {
    params,
  });
};
export { getProducts };
