import { useEffect, useState } from "react";
import { getSales } from "../api";
import type { SalesResponse } from "../types";

export default function useSales() {
  const [sales, setSales] = useState<SalesResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSales = async () => {
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
    };
    fetchSales();
  }, []);
  return { sales, loading };
}
