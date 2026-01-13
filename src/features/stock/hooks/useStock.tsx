import { useCallback, useEffect, useState } from "react";
import { getStocks } from "../api";
import type { StockData } from "../types";
export default function useStock() {
  const [stocks, setStocks] = useState<StockData | []>([]);
  const [loading, setLoading] = useState(true);
  const fetchStock = useCallback (async () => {
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
    },[]);
  useEffect(() => {
    fetchStock();
  }, [fetchStock]);
  return { loading, stocks, refetch:fetchStock };
}
