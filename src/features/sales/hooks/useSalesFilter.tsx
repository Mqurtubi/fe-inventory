import { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";

export default function useSalesFilter() {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 600);
  return { search, setSearch, debounceSearch };
}
