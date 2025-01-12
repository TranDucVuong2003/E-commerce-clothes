import { useQuery } from "@tanstack/react-query";
import { onGetProductSellList } from "../services/ProductsApi";

export const useGetListSellProducts = () => {
    const query = useQuery({
        queryKey: ["product-sell-list"],
        queryFn: onGetProductSellList,
      });
    
      const { data, isPending, isError, error, refetch } = query;
      return { data, isPending, isError, error, refetch };
    };