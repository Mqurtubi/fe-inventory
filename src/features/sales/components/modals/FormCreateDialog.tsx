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
import useCreateSales from "../../hooks/useCreateSales";

export default function FormCreateDialog({
  open,
  handleClose,
  onSuccess
}) {
  const { form, handleChange, resetForm} = useFormSales();
  const {loading,submit}=useCreateSales()
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await submit(form)
      onSuccess(response.data.data)
      resetForm()
    } catch (error) {
      console.log(error)
    }
  }
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
