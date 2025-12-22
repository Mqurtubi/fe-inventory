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

type CellValue = string | number | boolean | null | undefined

interface ColumnData {
  id: "sku" | "name" | "description" | "price" | "isActive" | "currentStock" | "createdAt" | "updatedAt";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: CellValue) => string;
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

interface InputSearchProps{
  value:string,
  onChange:(value:string)=>void
}

export type {
  ProductResponse,
  ColumnData,
  Data,
  ProductTableProps,
  ProductHeaderTableProps,
  GetProductParams,
  InputSearchProps
};
