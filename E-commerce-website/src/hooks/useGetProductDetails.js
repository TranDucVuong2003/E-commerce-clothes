import { useQuery } from "@tanstack/react-query";
import { onGetProductDetail } from "../services/ProductsApi";

export const useGetProduntDetail = ( id) => {
  const query = useQuery({
    queryKey: ["product-details", id],
    queryFn: () => onGetProductDetail( id),
  });

  const { data, isPending, isError, error, refetch } = query;
  console.log("data", data);
  return { data, isPending, isError, error, refetch };
};
