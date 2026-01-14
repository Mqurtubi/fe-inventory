import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DetailSaleDialog({ open, sale, handleClose }) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>Sale Detail</DialogTitle>

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        {!sale ? (
          <Typography>Loading...</Typography>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-5 justify-between ">
              <div>
                <Typography variant="subtitle2" color="text.secondary">
                  Invoice Code
                </Typography>
                <Typography variant="h6">{sale.code}</Typography>
              </div>
              <div>
                <Typography variant="subtitle2" color="text.secondary">
                  Customer
                </Typography>
                <Typography variant="h6">{sale.customer}</Typography>
              </div>
              <div>
                <Typography variant="subtitle2" color="text.secondary">
                  Date
                </Typography>
                <Typography variant="h6">
                  {dayjs(sale.createdAt).format("YYYY-MM-DD HH:mm")}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Amount
                </Typography>
                <Typography variant="h6">
                  {`Rp. ${sale.total.toLocaleString("id-ID")}`}
                </Typography>
              </div>
            </div>
            <hr style={{ margin: "16px 0" }} />

            {/* ITEMS */}
            {sale.items.map((item) => (
              <div
                key={item.productId}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <Typography>
                  {item.product.name} × {item.qty}
                </Typography>
                <Typography>
                  {(item.price * item.qty).toLocaleString()}
                </Typography>
              </div>
            ))}

            <hr style={{ margin: "16px 0" }} />

            {/* TOTAL */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontWeight="bold">Total</Typography>
              <Typography fontWeight="bold">
                {sale.total.toLocaleString()}
              </Typography>
            </div>
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
