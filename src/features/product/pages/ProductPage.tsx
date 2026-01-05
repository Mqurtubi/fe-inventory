import ProductTable from "../components/table/ProductTable";
import ProductHeader from "../components/ProductHeader";
import { useState } from "react";
import FormCreateDialog from "../components/modals/FormCreateDialog";
import useProduct from "../hooks/useProduct";
import { deleteProduct, activeProduct } from "../api";
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
    addProduct,
    status,
    setStatus,
    fetchProduct,
  } = useProduct();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenUpdate = (product: SelectedProduct) => {
    setSelectedProduct(product);
    setOpenUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    await fetchProduct();
  };

  const handleActive = async (id: string) => {
    await activeProduct(id);
    await fetchProduct();
  };
  return (
    <div className="space-y-5">
      <ProductHeader handleClick={handleClickOpen} />
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
        handleUpdate={handleClickOpenUpdate}
      />
      <FormCreateDialog
        open={open}
        handleClose={handleClose}
        onSuccess={addProduct}
      />
      <FormUpdateDialog
        open={openUpdate}
        handleClose={handleCloseUpdate}
        onSuccess={addProduct}
        product={selectedProduct}
      />
    </div>
  );
}
