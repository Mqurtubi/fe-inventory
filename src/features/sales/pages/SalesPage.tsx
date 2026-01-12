import { useState } from "react";
import SalesHeader from "../components/SalesHeader";
import SalesTable from "../components/table/SalesTable";
import useSales from "../hooks/useSales";
import FormCreateDialog from "../components/modals/FormCreateDialog";

export default function SalesPage() {
  const { sales, loading } = useSales();
  const [open, setOpen] = useState(false);
  if (loading) return <p>loading...</p>;
  return (
    <div className="space-y-5 mx-5">
      <SalesHeader handleClick={() => setOpen(true)} />
      <SalesTable sales={sales} />
      <FormCreateDialog open={open} handleClose={() => setOpen(false)} />
    </div>
  );
}
