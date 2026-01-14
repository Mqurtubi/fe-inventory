import { useState, useCallback } from "react";
import type { SaleItem, SaleItemForm } from "../types";
const initialForm: SaleItemForm = {
  customer: "",
  items: [],
};
export default function useFormSales() {
  const [form, setForm] = useState<SaleItemForm>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const addItem = (item: SaleItem) => {
    setForm((prev) => {
      const exist = prev.items.find((i) => i.productId === item.productId);
      if (exist) {
        return {
          ...prev,
          items: prev.items.map((i) =>
            i.productId === item.productId ? { ...i, qty: i.qty + item.qty } : i
          ),
        };
      }
      return {
        ...prev,
        items: [...prev.items, item],
      };
    });
  };

  const removeItem = (productId: string) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.productId !== productId),
    }));
  };

  const resetForm = useCallback(() => {
    setForm(initialForm);
  }, []);

  return { form, handleChange, resetForm, setForm, addItem, removeItem };
}
