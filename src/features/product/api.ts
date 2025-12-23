import { http } from "../../services/http";
import type { ProductResponse, GetProductParams, ProductFormValues } from "./type";

const getProducts = (params?: GetProductParams) => {
  return http.get<{ data: ProductResponse }>("/product", {
    params,
  });
};

const createProduct = (data:ProductFormValues)=>{
  return http.post("/product",data)
}
export { getProducts,createProduct };
