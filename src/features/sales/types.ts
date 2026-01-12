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
type CellValue = string | number | boolean | null | undefined;

export type { SalesResponse, SalesHeaderProps, ColumnData, SalesTableProps };
