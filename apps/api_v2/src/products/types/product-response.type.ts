import type { Product } from "@repo/lib-node-models";

export interface ProductSearchResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
