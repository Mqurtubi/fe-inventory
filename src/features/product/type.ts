import type { ReactNode } from "react";

interface ProductResponse {
  data: Data[];
  limit: number;
  page: number;
  total: number;
  sortBy: string;
  orderBy: string;
}

interface Data {
  id: string;
  name: string;
  price: number;
  sku: string;
  currentStock: number;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  action: string;
}

type CellValue = string | number | boolean | null | undefined;

interface ColumnData {
  id:
    | "sku"
    | "name"
    | "description"
    | "price"
    | "isActive"
    | "currentStock"
    | "createdAt"
    | "updatedAt"
    | "action";
  label: string;
  minWidth?: number;
  dataKey?: keyof Data;
  numeric?: boolean;
  render?: (row: Data) => React.ReactNode;
  format?: (value: CellValue) => ReactNode;
  align?: "left" | "center" | "right" | "justify";
  type?: string;
}

interface ProductTableProps {
  products: Data[];
  search: string;
  setSearch: (value: string) => void;
  sortBy: "createdAt" | "name" | "updatedAt";
  setSortBy: (value: "createdAt" | "name" | "updatedAt") => void;
  order: "asc" | "desc";
  setOrder: (value: "asc" | "desc") => void;
  handleDelete: (value: string) => void;
  handleActive: (value: string) => void;
  handleUpdate: (value: SelectedProduct) => void;
  status: "all" | "active" | "archived";
  setStatus: (value: "all" | "active" | "archived") => void;
}

interface ProductHeaderTableProps {
  columns: ColumnData[];
  value: string;
  onChange: (value: string) => void;
}

interface GetProductParams {
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
  isActive?: boolean;
  page?: number;
  limit?: number;
}

interface InputSearchProps {
  value: string;
  onChange: (value: string) => void;
}

interface SelectSortTableProps<T extends string = string> {
  value: T;
  options: OptionsSelect<T>[];
  onChange: (value: T) => void;
}

interface OptionsSelect<T extends string = string> {
  label: string;
  value: T;
}

interface ProductFormValues {
  name: string;
  description?: string;
  currentStock: number;
  price: number;
}

interface SelectedProduct {
  id: string;
  name: string;
  description?: string;
  currentStock: number;
  price: number;
}

interface FormDialogProps {
  open: boolean;
  handleClose: () => void;
  onSuccess: (value: Data) => void;
  product?: SelectedProduct | null;
}

interface ProductHeaderProps {
  handleClick: () => void;
}
export type {
  ProductResponse,
  ColumnData,
  Data,
  ProductTableProps,
  ProductHeaderTableProps,
  GetProductParams,
  InputSearchProps,
  SelectSortTableProps,
  OptionsSelect,
  ProductFormValues,
  FormDialogProps,
  ProductHeaderProps,
  SelectedProduct,
};
