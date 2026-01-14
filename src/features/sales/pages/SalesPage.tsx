import { useState, useEffect } from "react";
import SalesHeader from "../components/SalesHeader";
import SalesTable from "../components/table/SalesTable";
import useSales from "../hooks/useSales";
import FormCreateDialog from "../components/modals/FormCreateDialog";
import DetailSaleDialog from "../components/modals/DetailSaleDialog";
import useDetailSales from "../hooks/useDetailSales";

export default function SalesPage() {
  const { sales, loading, refetch } = useSales();
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedSaleId, setSelectedSaleId] = useState("");
  const { data, loading: loadingDetail } = useDetailSales(selectedSaleId);
  useEffect(() => {
    if (data) {
      console.log("DETAIL SALE:", data);
    }
  }, [data]);
  if (loading) return <p>loading...</p>;

  return (
    <div className="space-y-5 mx-5">
      <SalesHeader handleClick={() => setOpen(true)} />
      <SalesTable
        sales={sales}
        handleShow={(sale) => {
          console.log(sale);
          setSelectedSaleId(sale.id);
          console.log(data);
          setOpenDetail(true);
        }}
      />
      <FormCreateDialog
        open={open}
        handleClose={() => setOpen(false)}
        onSuccess={refetch}
      />
      <DetailSaleDialog
        open={openDetail}
        sale={data}
        handleClose={() => {
          setOpenDetail(false);
        }}
      />
    </div>
  );
}
