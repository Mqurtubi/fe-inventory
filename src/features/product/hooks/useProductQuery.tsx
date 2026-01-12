import { useCallback, useState, useEffect } from "react";
import { getProducts } from "../api";
import type { Data, ProductQueryParams } from "../type";
export default function useProductQuery(params: ProductQueryParams) {
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchProduct = useCallback(async () => {
    setLoading(true);
    try {
      const productsResponse = await getProducts(params);
      setProducts(productsResponse.data.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return { products, loading, refetch: fetchProduct };
}
