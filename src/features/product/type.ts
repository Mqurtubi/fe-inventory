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
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
  render?: (row: Data) => React.ReactNode;
}

interface ProductTableProps {
  product: Data[];
  loading: boolean;
  value: string;
  onChange: (value: string) => void;
}

interface ProductHeaderTableProps {
  columns: ColumnData[];
  value: string;
  onChange: (value: string) => void;
}

interface GetProductParams {
  search?: string;
  sortBy?: string;
  orderBy?: "asc" | "desc";
  page?: number;
  limit?: number;
}
export type {
  ProductResponse,
  ColumnData,
  Data,
  ProductTableProps,
  ProductHeaderTableProps,
  GetProductParams,
};
