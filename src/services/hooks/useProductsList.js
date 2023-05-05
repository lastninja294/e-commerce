import { useQuery } from "@tanstack/react-query";

import ProductsAPI from "@/services/api/domains/products";

export const useProductsList = () => {
  const { data, status, isSuccess, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductsAPI.getProducts(),
    staleTime: Infinity,
  });

  return { data, status, isSuccess, isLoading };
};
