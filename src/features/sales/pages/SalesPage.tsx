import useSales from "../hooks/useSales";

export default function SalesPage() {
  const { sales, loading } = useSales();
  return <p>Sales page</p>;
}
