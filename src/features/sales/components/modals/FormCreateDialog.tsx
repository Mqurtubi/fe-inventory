import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppTextField from "../../../../components/ui/AppTextField";
import useFormSales from "../../hooks/useFormSales";
import useCreateSales from "../../hooks/useCreateSales";
import useProduct from "../../../product/hooks/useProduct";
import SelectProduct from "../filters/SelectProduct";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function FormCreateDialog({ open, handleClose, onSuccess }) {
  const { activeProducts } = useProduct();
  const { form, handleChange, resetForm, addItem } = useFormSales();
  const { loading, submit } = useCreateSales();
  const [selected, setSelected] = useState("");
  const [qty, setQty] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await submit(form);
      onSuccess(response.data.data);
      handleClose();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent sx={{ width: "600px" }}>
          <form
            onSubmit={handleSubmit}
            id="subscription-form"
            className="space-y-6"
          >
            <AppTextField
              label="Customer name"
              type="text"
              placeholder="Enter customer name"
              value={form.customer}
              handleChange={handleChange}
              name="customer"
            />
            <hr className="text-slate-300" />
            <div className="flex flex-col gap-2">
              <InputLabel>Add items</InputLabel>
              <div className="flex gap-3">
                <SelectProduct
                  product={activeProducts}
                  value={selected}
                  handleChange={setSelected}
                />
                <AppTextField
                  type="text"
                  value={qty}
                  handleChange={(e) => setQty(Number(e.target.value))}
                  name="qty"
                  label=""
                />
              </div>
              <Button
                onClick={() => {
                  addItem({ productId: selected, qty });
                  setSelected("");
                  setQty(1);
                }}
                startIcon={<AddRoundedIcon />}
                variant="contained"
                fullWidth
                disabled={!selected}
                color="inherit"
              >
                Add item
              </Button>
            </div>
            <hr className="text-slate-300" />
            <div className="flex flex-col gap-3">
              <Typography>items ({form.items.length})</Typography>
              <div className="flex flex-col gap-4">
                {form.items.map((item) => {
                  const product = activeProducts.find(
                    (p) => p.id === item.productId
                  );
                  return (
                    <div className="flex justify-between items-center">
                      <Box>
                        <Typography variant="body1">{product?.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Qty : {item.qty} x {product?.price}
                        </Typography>
                      </Box>
                      <Box>{Number(item.qty) * Number(product?.price)}</Box>
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" form="subscription-form" disabled={loading}>
            {loading ? "loading..." : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
