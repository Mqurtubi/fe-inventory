import { useState } from "react";
import type { ProductFormValues } from "../type";
import { createProduct } from "../api";

export default function useCreateProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const submit = async (payload: ProductFormValues) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createProduct(payload);
      return response;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, submit };
}
