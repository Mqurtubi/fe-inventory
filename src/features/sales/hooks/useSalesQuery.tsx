import { useCallback, useEffect, useState } from "react";
import { getSales } from "../api";

export default function useSalesQuery(search?: string) {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSales = useCallback(async () => {
    setLoading(true);
    try {
      const salesResponse = await getSales(search);
      setSales(salesResponse.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [search]);
  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  return { sales, loading, refetch: fetchSales };
}
