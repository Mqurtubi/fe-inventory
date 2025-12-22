import ProductTable from "../components/ProductTable";
import ProductHeader from "../components/ProductHeader";
export default function ProductPage() {
  return (
    <div className="space-y-5">
      <ProductHeader />
      <ProductTable />
    </div>
  );
}
