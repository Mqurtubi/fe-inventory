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

export type { ProductResponse };
