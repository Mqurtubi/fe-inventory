import StockForm from "../components/forms/StockForm";
import StockHeader from "../components/StockHeader";
import useStock from "../hooks/useStock";
import StockTable from "../components/table/StockTable";
export default function StockPage() {
  const { stocks, loading, refetch } = useStock();
  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className="space-y-5 mx-5">
      <StockHeader />
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <StockForm onSuccess={refetch}/>
        </div>
        <div className="col-span-8">
          <StockTable stock={stocks} />
        </div>
      </div>
    </div>
  );
}
