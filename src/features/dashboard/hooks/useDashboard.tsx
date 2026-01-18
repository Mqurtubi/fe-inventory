import { useEffect, useState } from "react";
import { getSummary } from "../api";
import type { SummaryResponse } from "../type";

export default function useDashboard() {
  const [data, setData] = useState<SummaryResponse | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      try {
        const response = await getSummary();
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);
  return { data, loading };
}
