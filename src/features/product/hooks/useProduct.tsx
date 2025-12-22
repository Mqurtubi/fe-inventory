import { useEffect, useState } from "react";
import { getProducts } from "../api";
import type { Data } from "../type";
import useDebounce from "../../../hooks/useDebounce";

export default function useProduct() {
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 600);
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productsResponse = await getProducts({ search: debounceSearch });
        setProducts(productsResponse.data.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [debounceSearch]);

  return { loading, products, search, setSearch };
}
