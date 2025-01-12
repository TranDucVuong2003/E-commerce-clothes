import React, { memo } from "react";
import LoadingCard from "./LoadingCard";
import ProductCard from "./ProductCard";

function ProductGrid({ category, listProducts, isPending, className, sliceNumberEnd, sliceNumberStart }) {
  return (
    <div className={["grid grid-cols-4 sm:grid-cols-2 gap-y-4", className ].join(" ")}>
      {isPending ? (
        <LoadingCard />
      ) : (
        listProducts  && listProducts.slice(sliceNumberStart,sliceNumberEnd).map((product) => (
          <div key={product.id}>
            <ProductCard category={category} product={product} />
          </div>
        ))
      )}
    </div>
  );
}

export default memo(ProductGrid);
