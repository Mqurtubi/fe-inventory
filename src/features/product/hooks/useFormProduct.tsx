import { useCallback, useState } from "react";
import type { ProductFormValues } from "../type";
const initialForm: ProductFormValues = {
  name: "",
  description: "",
  price: 0,
  currentStock: 0,
};
export default function useFormProduct() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const resetForm = useCallback(() => {
    setForm(initialForm);
  }, []);

  return { form, handleChange, resetForm, setForm };
}
