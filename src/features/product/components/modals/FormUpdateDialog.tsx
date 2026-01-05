import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import type { FormDialogProps } from "../../type";
import useFormProduct from "../../hooks/useFormProduct";
import useUpdateProduct from "../../hooks/useUpdateProduct";
import AppTextField from "../../../../components/ui/AppTextField";
export default function FormCreateDialog({
  open,
  handleClose,
  onSuccess,
  product,
}: FormDialogProps) {
  const { form, handleChange, resetForm, setForm } = useFormProduct();
  const { loading, submitUpdate } = useUpdateProduct();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await submitUpdate(form, product!.id);
      onSuccess(response.data.data);
      handleClose();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        description: product.description,
        price: product.price,
        currentStock: product.currentStock,
      });
    }
  }, [product, setForm]);

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent sx={{ width: "600px" }}>
          <form
            onSubmit={handleSubmit}
            id="subscription-form"
            className="space-y-6"
          >
            <AppTextField
              label="Name Product"
              type="text"
              value={form.name}
              handleChange={handleChange}
              name="name"
            />
            <AppTextField
              label="Description Product"
              type="text"
              value={form.description}
              handleChange={handleChange}
              name="description"
            />
            <AppTextField
              label="Stock Product"
              type="number"
              value={form.currentStock}
              handleChange={handleChange}
              name="currentStock"
            />
            <AppTextField
              label="Price Product"
              type="number"
              value={form.price}
              handleChange={handleChange}
              name="price"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" form="subscription-form" disabled={loading}>
            {loading ? "loading..." : "Update"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
