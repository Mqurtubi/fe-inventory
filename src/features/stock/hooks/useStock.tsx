import { useEffect, useState } from "react";
import { getStocks } from "../api";
import type { StockResponse } from "../types";
export default function useStock() {
  const [stocks, setStocks] = useState<StockResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStock = async () => {
      setLoading(true);
      try {
        const stocksResponse = await getStocks();
        console.log(stocksResponse.data.data);
        setStocks(stocksResponse.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStock();
  }, []);
  return { loading, stocks };
}
