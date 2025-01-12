import React, { useEffect } from "react";
import { useParams } from "react-router";
import ProductDetail from "../components/ProductDetail";
import Breadcumb from "../components/Breadcumb";

function ProductDetailsPage() {
  const { id } = useParams();
    useEffect(() => {
          window.scrollTo(0, 0); // Cuộn lên đầu trang
        }, [location.pathname]); // Theo dõi sự thay đổi của đường dẫn
  return (
    <div>
      <Breadcumb />
      <ProductDetail id={id} />
    </div>
  );
}

export default ProductDetailsPage;
