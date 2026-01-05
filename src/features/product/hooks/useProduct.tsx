import { useCallback, useEffect, useState } from "react";
import { getProducts } from "../api";
import type { Data } from "../type";
import useDebounce from "../../../hooks/useDebounce";

export default function useProduct() {
  const [products, setProducts] = useState<Data[]>([]);
  const [sortBy, setSortBy] = useState<"createdAt" | "name" | "updatedAt">(
    "createdAt"
  );
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [status, setStatus] = useState<"all" | "active" | "archived">("all");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 600);

  const addProduct = () => {
    fetchProduct();
  };
  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const productsResponse = await getProducts({
        search: debounceSearch,
        sortBy,
        order,
        isActive:
          status === "all" ? undefined : status === "active" ? true : false,
      });
      setProducts(productsResponse.data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [debounceSearch, sortBy, order, status]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    loading,
    products,
    search,
    setSearch,
    sortBy,
    setSortBy,
    order,
    setOrder,
    addProduct,
    status,
    setStatus,
    fetchProduct,
  };
}
