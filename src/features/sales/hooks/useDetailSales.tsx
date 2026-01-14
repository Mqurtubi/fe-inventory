import { useEffect, useState } from "react";
import { getSale } from "../api";

export default function useDetailSales(sale) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sale) return;

    const fetchDetailSale = async () => {
      try {
        setLoading(true);
        const response = await getSale(sale);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailSale();
  }, [sale]);
  return { data, loading };
}
