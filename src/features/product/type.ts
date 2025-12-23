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
    | "updatedAt";
  label: string;
  minWidth?: number;
  dataKey?: keyof Data;
  numeric?: boolean;
  render?: (row: Data) => React.ReactNode;
  format?: (value: CellValue) => string;
  align?: 'left' | 'center' | 'right' | 'justify'
}

interface ProductTableProps {
  products:Data[],
  search:string,
  setSearch:(value:string)=>void,
  sortBy:"createdAt" | "name" | "updatedAt"
  setSortBy:(value:string)=>void,
  order:"asc" | "desc"
  setOrder:(value:string)=>void
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

interface ProductFormValues{
  name:string,
  description?:string,
  currentStock:number,
  price:number
}

interface FormDialogProps{
  open:boolean,
  handleClose:()=>void,
  onSuccess:(value:Data)=>void
}

interface ProductHeaderProps{
  handleClick:()=>void
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
  ProductHeaderProps
};
