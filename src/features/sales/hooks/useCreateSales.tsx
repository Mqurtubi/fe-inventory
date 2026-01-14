import { useState } from "react";
import { createSales } from "../api";
import type { SaleItemForm } from "../types";

export default function useCreateSales() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const submit = async (payload: SaleItemForm) => {
    setLoading(true);
    setError(null);
    try {
      const responseSales = await createSales(payload);
      return responseSales;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, submit };
}
