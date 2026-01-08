import StockForm from "../components/forms/StockForm";
import StockHeader from "../components/StockHeader";
import useStock from "../hooks/useStock";
export default function StockPage() {
  const { stocks, loading } = useStock();
  return (
    <div className="space-y-5 mx-5">
      <StockHeader/>
      <div>
        <StockForm/>
      </div>
    </div>
  )
}
