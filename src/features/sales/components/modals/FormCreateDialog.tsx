import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import AppTextField from "../../../../components/ui/AppTextField";
import useFormSales from "../../hooks/useFormSales";
export default function FormCreateDialog({
  form,
  loading,
  handleChange,
  handleSubmit,
  open,
  handleClose,
}) {
  const { form, handleChange, resetForm, setForm } = useFormSales();
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
