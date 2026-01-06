import type { ReactNode } from "react";

interface AppTextFieldProps {
  label: string;
  placeholder?: string;
  type: string;
  value?: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

interface ColumnsData {
  id: string;
  label: string;
  minWidth?: number;
  dataKey?: string;
  numeric?: boolean;
  format?: (value: CellValue) => ReactNode;
  align?: "left" | "center" | "right" | "justify";
  type?: string;
}

interface AppTableProps<T extends { id: string; isActive: boolean }> {
  data: T[];
  columns: ColumnsData[];
  handleDelete?: (value: string) => void;
  handleUpdate?: (data: T) => void;
  handleActive?: (value: string) => void;
}

type CellValue = string | number | boolean | null | undefined;

export type { AppTextFieldProps, AppTableProps };
