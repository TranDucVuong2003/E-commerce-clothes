import React from "react";
import { renderStars } from "../helpers/renderStars";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductCard({ category, product }) {
  const navigate = useNavigate();
  return (
    <div className="w-[295px] h-[408px] cursor-pointer">
      <LazyLoadImage
        className="w-full h-[298px] object-cover rounded-2xl mb-4 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-10 nom5"
        src={product.imageUrl}
        onClick={() => navigate(`/shop/${product.id}`)}
      />
      <p
        onClick={() => navigate(`/shop/${product.id}`)}
        className="font-bold mt-4 mb-[2px] text-[20px] cursor-pointer"
      >
        {product.name}
      </p>
      <div className="flex items-center font-light">
        {renderStars(product.rating, 19, 17)}
        <span className="ml-4">
          {product.rating}/<span className="opacity-50">5</span>
        </span>
      </div>
      <span className="flex items-center ">
        <span className="font-bold leading-8 text-[24px]">
          ${product.price}
        </span>
        <span className="line-through leading-8 text-[24px] font-normal opacity-35 ml-3">
          {product.originalPrice && product.originalPrice}
        </span>
        {product.discount && (
          <span className="ml-3 text-[12px] leading-3 w-[50px] h-[24px] bg-[#ff3333]/10 rounded-[42px] text-[#FF3333]">
            <span className="flex items-center justify-center h-full font-normal">
              {product.discount && product.discount}%
            </span>
          </span>
        )}
      </span>
    </div>
  );
}

export default ProductCard;
