import { http } from "../../services/http";
import type {
  ProductResponse,
  GetProductParams,
  ProductFormValues,
} from "./type";

const getProducts = (params?: GetProductParams) => {
  return http.get<{ data: ProductResponse }>("/product", {
    params,
  });
};

const createProduct = (data: ProductFormValues) => {
  return http.post("/product", data);
};

const updateProduct = (data: ProductFormValues, id: string) => {
  return http.put(`product/${id}`, data);
};

const deleteProduct = (id: string) => {
  return http.put(`/product/${id}/archive`);
};

const activeProduct = (id: string) => {
  return http.put(`/product/${id}/restore`);
};
export {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  activeProduct,
};
