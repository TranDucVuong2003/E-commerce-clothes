import React, { useContext, useEffect, useState } from "react";
import FilterIcon from "../assets/Icon/FilterIcon";
import RightArrowIcon from "../assets/Icon/RightArrowIcon";
import Button from "./Button";
import { AppContext } from "../Context/ContextData";
import ProductGrid from "./ProductGrid";
import PreviousIcon from "../assets/Icon/PreviousIcon";
import NextIcon from "../assets/Icon/NextIcon";
import LoadingCard from "./LoadingCard";
import { use } from "react";

function ProductShop() {
  // Lấy dữ liệu từ Context
  const { productSellList, isPendingProductSellList } = useContext(AppContext);

  const [changePageLoading, setChangePageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [offSetValue, setOffSetValue] = useState(9);
  const [active, setActive] = useState(0);
  const [numberOfPage, setNumberOfPage] = useState(
    Math.ceil(productSellList.length / offSetValue)
  );

  const listSort = [
    "Popuplar",
    "Sell",
    "Low to High Price",
    " High to Low Price",
  ];

  //Gen ra bao nhiêu sản phầm 9, 15, 21
  const sliceNumberStart = (currentPage - 1) * offSetValue;
  const sliceNumberEnd = sliceNumberStart + offSetValue;

  // Xử lí pre và next Btn
  const handleNextBtn = () => {
    if (currentPage == numberOfPage) {
      setCurrentPage(numberOfPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousBtn = () => {
    if (currentPage == 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setNumberOfPage(Math.floor(productSellList.length / offSetValue));
  }, [productSellList, offSetValue]);

  return (
    <div className="">
      <div className="container">
        <div className="flex gap-4">
          {/* Nav */}
          <div>
            <div className="w-[295px] rounded-3xl border-2 px-6 pt-5 pb-7">
              <div className="flex justify-between">
                <span className="font-bold text-[20px]">Filters</span>
                <FilterIcon />
              </div>

              <div className="border-b-2 my-6"></div>

              <div>
                <ul className="flex flex-col gap-5">
                  <li className=" cursor-pointer flex justify-between w-full">
                    <span className="opacity-60">T-shirts</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" cursor-pointer flex justify-between w-full">
                    <span className="opacity-60">Shorts</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" cursor-pointer flex justify-between w-full">
                    <span className="opacity-60">Shirts</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" cursor-pointer flex justify-between w-full">
                    <span className="opacity-60">Hoodie</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" cursor-pointer flex justify-between w-full">
                    <span className="opacity-60">Jeans</span>
                    <RightArrowIcon />
                  </li>
                </ul>
              </div>

              <div className="border-b-2 my-6"></div>

              <span className="font-bold text-[20px]">Price</span>
              <div className="mt-5 flex gap-2 w-full flex-wrap text-[14px]">
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  Under 100$
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  Form 100-250$
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  From 250-550$
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  From 500-800$
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  Over 800$
                </span>
              </div>

              <div className="border-b-2 my-6"></div>

              <span className="font-bold text-[20px]">Size</span>
              <div className="mt-5 flex gap-2 w-full flex-wrap text-[14px]">
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  XX-Small
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  X-Small
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  Small
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  Medium
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  Large
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  X-Large
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  XX-Large
                </span>
                <span className="p-2 bg-[#F0F0F0] rounded-2xl hover:text-[#FFFFFF] hover:bg-black cursor-pointer">
                  3X-Large
                </span>
              </div>

              <div className="border-b-2 my-6"></div>

              <span className="font-bold text-[20px]">Filters</span>

              <div className="mt-3">
                <ul className="flex flex-col gap-5">
                  <li className=" flex justify-between w-full">
                    <span className="opacity-60">Casual</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" flex justify-between w-full">
                    <span className="opacity-60">Formal</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" flex justify-between w-full">
                    <span className="opacity-60">Party</span>
                    <RightArrowIcon />
                  </li>
                  <li className=" flex justify-between w-full">
                    <span className="opacity-60">Gym</span>
                    <RightArrowIcon />
                  </li>
                </ul>
              </div>

              <div
                onClick={() => {
                  setChangePageLoading(true);
                  setTimeout(() => {
                    setChangePageLoading(false);
                  }, 700);
                }}
              >
                <Button className={"mt-4 w-full hover:opacity-65"}>
                  Apply Filter
                </Button>
              </div>
            </div>

            <div></div>
          </div>

          {/* Content */}
          <div className="w-full">
            <div className="flex justify-between items-center h-8 w-full">
              <span className="font-bold text-[32px]">Shop</span>
              <div className="flex justify-between items-center gap-6 h-full">
                <div>
                  <span className="flex gap-2 items-center">
                    <span>Sort by: </span>

                    {listSort.map((item, index) =>
                      active == index ? (
                        <span
                          className={`border-2 p-1 rounded-lg cursor-pointer bg-black text-white`}
                        >
                          {item}
                        </span>
                      ) : (
                        <span
                          className={`border-2 p-1 rounded-lg cursor-pointer`}
                          onClick={() => setActive(index)}
                        >
                          {item}
                        </span>
                      )
                    )}
                  </span>
                </div>

                <div className="border-2 rounded-lg px-1 cursor-pointer">
                  <span>Showing: </span>
                  <select
                    name=""
                    id=""
                    className="p-2 border-none focus:outline-none"
                    onChange={(e) => {
                      setChangePageLoading(true);
                      setOffSetValue(e.target.value);
                      setTimeout(() => {
                        setChangePageLoading(false);
                      }, 700);
                    }}
                  >
                    <option value="9">9</option>
                    <option value="15">15 </option>
                    <option value="21">21</option>
                  </select>
                </div>
              </div>
            </div>

            {changePageLoading ? (
              <div className="grid sm:grid-cols-3 gap-y-4">
                <LoadingCard />
              </div>
            ) : (
              <div className="mt-4">
                <ProductGrid
                  isPending={isPendingProductSellList}
                  listProducts={productSellList}
                  className={"md:grid-cols-3 "}
                  sliceNumberStart={sliceNumberStart}
                  sliceNumberEnd={sliceNumberEnd}
                />
              </div>
            )}

            <div className="border-b-2 my-6"></div>

            <div className="w-full h-5 flex items-center justify-between">
              <button
                onClick={() => handlePreviousBtn()}
                disabled={currentPage === 1}
                // className="flex items-center gap-2 border-2 p-2 px-4 rounded-xl hover:opacity-70"
                className={`py-2 px-4 rounded-xl border border-gray-400 flex items-center gap-2 ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-200"
                }`}
              >
                <PreviousIcon />
                <span>Previous</span>
              </button>

              <div className="flex gap-2 items-center">
                <span className="px-4">{`Page ${currentPage} of ${numberOfPage}`}</span>
                {[...Array(numberOfPage)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className="border-none p-2 px-4 hover:opacity-70 bg-[#eeebeb] rounded-xl"
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleNextBtn()}
                disabled={currentPage === numberOfPage}
                className={`py-2 px-4 rounded-xl border border-gray-400 flex items-center gap-2 ${
                  currentPage === numberOfPage
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-200"
                }`}
              >
                <span>Next</span>
                <NextIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShop;
