import ProductTable from "../components/table/ProductTable";
import ProductHeader from "../components/ProductHeader";
import { useState } from "react";
import FormCreateDialog from "../components/modals/FormCreateDialog";
import useProduct from "../hooks/useProduct";
import FormUpdateDialog from "../components/modals/FormUpdateDialog";
import type { SelectedProduct } from "../type";
export default function ProductPage() {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<SelectedProduct | null>(null);
  const {
    products,
    search,
    setSearch,
    sortBy,
    setSortBy,
    order,
    setOrder,
    status,
    setStatus,
    handleActive,
    handleDelete,
    refetchProducts,
  } = useProduct();
  return (
    <div className="space-y-5 mx-5">
      <ProductHeader handleClick={() => setOpen(true)} />
      <ProductTable
        products={products}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        handleDelete={handleDelete}
        handleActive={handleActive}
        status={status}
        setStatus={setStatus}
        handleUpdate={(product: SelectedProduct) => {
          setSelectedProduct(product);
          setOpenUpdate(true);
        }}
      />
      <FormCreateDialog
        open={open}
        handleClose={() => setOpen(false)}
        onSuccess={refetchProducts}
      />
      <FormUpdateDialog
        open={openUpdate}
        handleClose={() => setOpenUpdate(false)}
        onSuccess={refetchProducts}
        product={selectedProduct}
      />
    </div>
  );
}
