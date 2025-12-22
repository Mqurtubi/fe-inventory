import useStock from "../hooks/useStock";
export default function StockPage() {
  const { stocks, loading } = useStock();
  return <p>stock pages</p>;
}
