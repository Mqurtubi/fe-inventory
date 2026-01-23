import { useMemo } from "react";

import useSalesQuery from "./useSalesQuery";
import useSalesFilter from "./useSalesFilter";
export default function useSales() {
  const filter = useSalesFilter();

  const search = useMemo(
    () =>
      filter.debounceSearch?.trim() !== "" ? filter.debounceSearch : undefined,
    [filter.debounceSearch],
  );

  const query = useSalesQuery(search);

  return {
    sales: query.sales,
    loading: query.loading,
    refetch: query.refetch,
    ...filter,
  };
}
