import { createContext, useState } from "react";

import { useGetListSellProducts } from "../hooks/useGetListSellProduct";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  
  const accountLogIn = [{
    tk: 'admin',
    mk: '1234'
  }];

  const {
    data: productSellList,
    isPending: isPendingProductSellList,
    isError: isErrorProductSellList,
    error: errorProductSellList,
    refetch: refetchProductSellList,
  } = useGetListSellProducts();

  return (
    <AppContext.Provider
      value={{
        productSellList: productSellList ? productSellList : [],
        isPendingProductSellList,
        isAuth, setIsAuth, accountLogIn
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
