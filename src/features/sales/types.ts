import type { ReactNode } from "react";

interface SalesResponse {
  code: string;
  id: string;
  customer: string;
  userId: string;
  total: number;
  createdAt: string;
  updatedAt: string;
}

interface ColumnData {
  id: "code" | "customer" | "total" | "createdAt" | "action";
  label: string;
  minWidth?: number;
  numeric?: boolean;
  render?: (row: SalesResponse) => React.ReactNode;
  format?: (value: CellValue) => ReactNode;
  align?: "left" | "center" | "right" | "justify";
  type?: string;
}

interface SalesTableProps {
  sales: SalesResponse[];
  search: string;
  setSearch: (value: string) => void;
  handleShow: (value) => void;
}
interface SalesHeaderProps {
  handleClick: () => void;
}

interface SaleItem {
  productId: string;
  qty: number;
}

interface SaleItemForm {
  customer: string;
  items: SaleItem[];
}
type CellValue = string | number | boolean | null | undefined;
interface SelectProductProps<T extends string> {
  value: string;
  product: Product[];
  handleChange: (value: T) => void;
}
interface Product {
  id: string;
  name: string;
  price: number;
}
export type {
  SalesResponse,
  SalesHeaderProps,
  ColumnData,
  SalesTableProps,
  SaleItemForm,
  SaleItem,
  SelectProductProps,
};
