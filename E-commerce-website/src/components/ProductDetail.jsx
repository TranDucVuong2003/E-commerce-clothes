import React, { useContext, useEffect, useState } from "react";
import { renderStars } from "../helpers/renderStars";
import Button from "./Button";
import ProductGrid from "./ProductGrid";
import { AppContext } from "../Context/ContextData";
import { useGetProduntDetail } from "../hooks/useGetProductDetails";
import { useParams } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductDetail() {
  const { id } = useParams(); //lấy số 1 trên url
  const { data, isPending, isError, error } = useGetProduntDetail({
    id,
  });
  const [sizeActive, setSizeActive] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState("")


  const { productSellList, isPendingProductSellList } = useContext(AppContext);
  const listSize = ["Small", "Medium", "Large", "X-large"];

  // Gen random các gợi ý sản phẩn
  const sliceNumberStart = id;
  const sliceNumberEnd = parseInt(sliceNumberStart) + 4;

  console.log('sliceNumberStart sliceNumberEnd', sliceNumberStart, sliceNumberEnd);
  

  // const [searchParams] = useSearchParams();
  // const category = searchParams.get("category"); // Lấy giá trị của tham số query param "category" từ URL "
  // console.log("searchParams", category);

  useEffect(() => {
    if (data) setMainImg(data.imageUrl);
  }, [data]);
  
  return (
    <div className="container mx-auto p-4">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Images */}
        <div className="flex gap-4">
          {isPending ? (
            <div className="flex flex-col gap-2">
              <div className="w-[150px] h-[160px] bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-[150px] h-[160px] bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-[150px] h-[160px] bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          ) : (
            data &&
            data.images && (
              <div className="flex flex-col gap-2">
                {data.images.map((image, index) => (
                  <LazyLoadImage
                  key={index}
                  src={image}
                  onClick={() => {
                    setMainImg(image); // Thay đổi ảnh chính
                  }}
                  alt={`Thumbnail ${index + 1}`}
                  className={`border rounded-lg cursor-pointer w-[150px] h-[160px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 "
                  }`}
                />
                ))}
              </div>
            )
          )}
          {isPending ? (
            <div className="w-full h-[500px] bg-gray-200 rounded-lg animate-pulse"></div>
          ) : (
            data &&
            data.imageUrl && (
              <div className="border rounded-lg mb-4 w-full h-[500px]">
                <LazyLoadImage
                  src={mainImg}
                  alt="Product Image"
                  className="rounded-lg w-full h-full object-cover "
                />
              </div>
            )
          )}
        </div>

        {/* Right Section: Product Details */}
        <div>
          {isPending ? (
            <>
              <div className="w-1/2 h-6 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/4 h-5 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/3 h-8 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/4 h-5 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/3 h-8 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/4 h-5 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/3 h-8 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="w-1/4 h-5 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
            </>
          ) : (
            <>
              <div>
                {data && data.name && (
                  <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
                )}
                <div className="flex items-center mb-4">
                  {renderStars(4.5, 19, 17)}
                  <span className="ml-2 text-gray-500 text-sm">4.5/5</span>
                </div>
                <div className="mb-4">
                  {data && data.originalPrice && (
                    <span className="text-2xl font-bold text-black">
                      ${data.originalPrice}
                    </span>
                  )}
                  <span className="text-gray-500 line-through ml-2">$300</span>
                  <span className="text-red-500 ml-2">-40%</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>

                {/* Select Size */}
                <div className="mb-4">
                  <h3 className="font-bold mb-2">Choose Size</h3>
                  <div className="flex space-x-2">
                    {listSize.map((item, index) =>
                      sizeActive == index ? (
                        <button className="px-4 py-2 border rounded-lg bg-black text-white">
                          {item}
                        </button>
                      ) : (
                        <button
                          onClick={() => setSizeActive(index)}
                          className="px-4 py-2 border rounded-lg"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Select quantity */}
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <button 
                    onClick={() => { quantity == 0 ? setQuantity(0) : setQuantity(quantity-1)}}
                    className="px-2 py-1 border rounded">-</button>
                    <span className="px-4">{quantity}</span>
                    <button
                    onClick={() => setQuantity(quantity+1)}
                    className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>

                <Button>Add to cart</Button>
              </div>
            </>
          )}
        </div>
      </div>
      <h1 className="mt-[72px] font-extrabold text-[48px] mb-[55px] flex justify-center leading-[58px] font-[Integral]">
        YOU MIGHT ALSO LIKE
      </h1>
      <ProductGrid
        category={"sell"}
        isPending={isPendingProductSellList}
        listProducts={productSellList}
        className={"md:grid-cols-4 "}
        sliceNumberStart={sliceNumberStart}
        sliceNumberEnd={sliceNumberEnd}
      />
    </div>
  );
  // : (
  //   <>Loading....</>
  // )
  // );
}

export default ProductDetail;
