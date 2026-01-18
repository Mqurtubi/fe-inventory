import { Chip } from "@mui/material";
import StockProgressBar from "./StockProgressBar";

export default function LowStockItem({ items }) {
  return (
    <div className="space-y-2 py-4 border-b border-slate-200 last:border-b-0">
      <div className="flex justify-between items-center">
        <p>{items.name}</p>
        <Chip
          label="Low"
          sx={{ color: "red", backgroundColor: "rgba(239,68,68,0.12)" }}
        />
      </div>
      <div>
        <div className="flex justify-between items-center text-slate-500">
          <p>Current : {items.current}</p>
          <p>Min : {items.min}</p>
        </div>
        <StockProgressBar current={items.current} min={items.min} />
      </div>
    </div>
  );
}
