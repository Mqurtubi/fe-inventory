import useProductFilter from "./useProductFilter";
import useProductQuery from "./useProductQuery";
import { activeProduct, deleteProduct } from "../api";
import { useMemo } from "react";
export default function useProduct() {
  const filter = useProductFilter();

  const queryParams = useMemo(
    () => ({
      search: filter.debounceSearch || undefined,
      sortBy: filter.sortBy,
      order: filter.order,
      isActive:
        filter.status === "all" ? undefined : filter.status === "active",
    }),
    [filter.debounceSearch, filter.sortBy, filter.order, filter.status]
  );

  const query = useProductQuery(queryParams);

  const activeProducts = useMemo(
    () => query.products.filter((p) => p.isActive),
    [query.products]
  );
  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    query.refetch();
  };

  const handleActive = async (id: string) => {
    await activeProduct(id);
    query.refetch();
  };
  return {
    products: query.products,
    loading: query.loading,
    refetchProducts: query.refetch,
    ...filter,
    handleDelete,
    handleActive,
    activeProducts,
  };
}
