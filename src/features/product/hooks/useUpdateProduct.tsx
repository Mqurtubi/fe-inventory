import { useState } from "react";
import { updateProduct } from "../api";
import type { ProductFormValues } from "../type";

export default function useUpdateProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const submitUpdate = async (payload: ProductFormValues, id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await updateProduct(payload, id);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(true);
    }
  };
  return { loading, error, submitUpdate };
}
