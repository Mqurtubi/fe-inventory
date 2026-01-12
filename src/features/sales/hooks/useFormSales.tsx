import { useState, useCallback } from "react";
const initialForm = {
  customer: "",
  total: "",
  product: [],
};
export default function useFormSales() {
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
