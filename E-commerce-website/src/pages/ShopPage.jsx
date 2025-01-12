import React, { useEffect } from "react";
import ProductShop from "../components/ProductShop";
import Breadcumb from "../components/Breadcumb";

function ShopPage() {
  useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
      }, [location.pathname]); // Theo dõi sự thay đổi của đường dẫn
    
  return (
    <div>
      <Breadcumb  />
      <ProductShop />
    </div>
  );
}

export default ShopPage;
