import { useCallback, useEffect, useState } from "react";
import { getSales } from "../api";
import type { SalesResponse } from "../types";

export default function useSales() {
  const [sales, setSales] = useState<SalesResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSales = useCallback(async () => {
    setLoading(true);
    try {
      const salesResponse = await getSales();
      console.log(salesResponse.data);
      setSales(salesResponse.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchSales();
  }, [fetchSales]);
  return { sales, loading, refetch: fetchSales };
}
