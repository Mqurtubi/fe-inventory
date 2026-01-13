import type { ReactNode } from "react";

interface ColumnData {
  id: "type" | "product" | "qty" | "user" | "note" | "createdAt";
  label: string;
  minWidth?: number;
  numeric?: boolean;
  format?: (value: CellValue) => ReactNode;
  align?: "left" | "center" | "right" | "justify";
  type?: string;
}
type CellValue = string | number | boolean | null | undefined;

interface RowContentProps {
  row: StockData;
  columns: readonly ColumnData[];
}

interface StockTableProps {
  stock: StockData[];
}

interface StockData {
  id: string;
  note: string;
  qty: number;
  productId: string;
  type: MovementType;
  userId: string;
  createdAt: string;
}
interface SelectProductProps<T extends string> {
  value: string;
  product: Product[];
  handleChange: (value: T) => void;
}

interface StockFormProps{
  onSuccess:(value:StockData)=>void
}

interface StockValue {
  productId: string;
  qty: number;
  note?: string;
}

interface Product {
  id: string;
  name: string;
}
type MovementType = "in" | "out" | "adjust";
export type {
  SelectProductProps,
  MovementType,
  StockValue,
  ColumnData,
  RowContentProps,
  StockTableProps,
  StockData,
  StockFormProps
};
