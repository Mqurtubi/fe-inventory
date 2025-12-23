import { useEffect, useState } from "react";
import { getProducts } from "../api";
import type { Data } from "../type";
import useDebounce from "../../../hooks/useDebounce";

export default function useProduct() {
  const [products, setProducts] = useState<Data[]>([]);
  const [sortBy, setSortBy] = useState<"createdAt" | "name" | "updatedAt">(
    "createdAt"
  );
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 600);

  const addProduct = (product:Data)=>{
    setProducts((prev)=>[product,...prev])
  }
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productsResponse = await getProducts({
          search: debounceSearch,
          sortBy,
          order,
        });
        setProducts(productsResponse.data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [debounceSearch, sortBy, order]);

  return {
    loading,
    products,
    search,
    setSearch,
    sortBy,
    setSortBy,
    order,
    setOrder,
    addProduct
  };
}
