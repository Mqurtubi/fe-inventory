import ProductTable from "../components/table/ProductTable";
import ProductHeader from "../components/ProductHeader";
import { useState } from "react";
import FormDialog from "../components/modals/FormDialog";
import useProduct from "../hooks/useProduct";
export default function ProductPage() {
  const [open, setOpen] = useState(false);
  
  const { products, search, setSearch, sortBy, setSortBy, order, setOrder, addProduct } =
    useProduct();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div className="space-y-5">
      <ProductHeader handleClick={handleClickOpen}/>
      <ProductTable products={products} search={search} setSearch={setSearch} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
      <FormDialog open={open} handleClose={handleClose} onSuccess={addProduct}/>
    </div>
  );
}
