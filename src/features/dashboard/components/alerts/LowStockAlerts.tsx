import { useEffect } from "react";
import LowStockItem from "./LowStockItem";

export default function LowStockAlerts({ data }) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (!data) return null;
  return (
    <div className="border border-slate-300 rounded-2xl px-10 py-5  bg-white space-y-4 col-span-2">
      <div>
        <p className="text-xl">Low Stock Alerts</p>
        <p className="text-lg text-slate-500">Items below minimum threshold</p>
      </div>
      <div>
        {data.map((item) => (
          <LowStockItem items={item} />
        ))}
      </div>
    </div>
  );
}
