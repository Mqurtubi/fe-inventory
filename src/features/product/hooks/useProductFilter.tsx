import useDebounce from "../../../hooks/useDebounce";
import { useState } from "react";
export default function useProductFilter() {
  const [sortBy, setSortBy] = useState<"createdAt" | "name" | "updatedAt">(
    "createdAt"
  );
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [status, setStatus] = useState<"all" | "active" | "archived">("all");
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 600);

  return {
    search,
    setSearch,
    sortBy,
    setSortBy,
    order,
    setOrder,
    status,
    setStatus,
    debounceSearch,
  };
}
