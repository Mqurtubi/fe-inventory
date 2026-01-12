import { useCallback, useState } from "react";
import type { MovementType } from "../types";
const initialForm = {
  idProduct: "",
  qty: "",
  note: "",
  type: "in" as MovementType,
};
export default function useCreateStock() {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const setProductId = (id: string) => {
    setForm((prev) => ({
      ...prev,
      idProduct: id,
    }));
  };

  const setType = (type: MovementType) => {
    setForm((prev) => ({
      ...prev,
      type: type,
    }));
  };

  const resetForm = useCallback(() => {
    setForm(initialForm);
  }, []);
  return { form, handleChange, resetForm, setProductId, setType };
}
