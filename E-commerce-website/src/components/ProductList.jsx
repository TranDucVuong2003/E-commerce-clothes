import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/ContextData";
import ProductGrid from "./ProductGrid";
import Button from "./Button";
import casualImage from "../assets/img/casual.png";
import formalImage from "../assets/img/formal.png";
import partyImage from "../assets/img/party.png";
import gymImage from "../assets/img/gym.png";
import { renderStars } from "../helpers/renderStars";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TickIcon from "../assets/Icon/tickIcon";
import { reviews } from "../services/ProductsApi";
import { Link } from "react-router";
import ScrollReveal from "scrollreveal";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProductList() {
  const { productSellList, isPendingProductSellList, isAuth } = useContext(AppContext);

  useEffect(() => {
    if (isAuth) {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "60px",
        duration: 2500,
        opacity: 0.7,
        reset: false,
      });

      sr.reveal(".new-arrival-products");
      sr.reveal(".new-arrival-title", {
        origin: "top",
        distance: "50px",
        duration: 2500,
      });

      sr.reveal(".new-sell-products", {
        delay: 0,
        distance: "70px",
        viewFactor: 0.1,
      });

      sr.reveal(".new-sell-title", {
        origin: "top",
        delay: 0,
        distance: "70px",
        viewFactor: 0.1,
      });

      sr.reveal(".by-style", {
        origin: "left",
        distance: "70px",
      });

      sr.reveal(".feedback", {
        origin: "right",
        distance: "70px",
      });
    }
  }, [isAuth]);

  return (
    <div>
      <div className="container">
        {/* new arrival */}
        <h1 className="new-arrival-title mt-[72px] font-extrabold text-[48px] mb-[55px] flex justify-center leading-[58px] font-[Integral]">
          NEW ARRIVALS
        </h1>
        <div className="new-arrival-products">
          <ProductGrid
            category="new"
            isPending={isPendingProductSellList}
            listProducts={productSellList}
            className={"md:grid-cols-4 "}
            sliceNumberStart={0}
            sliceNumberEnd={4}
          />
          <div className="w-full flex justify-center mt-9">
            <Link to={"/shop"}>
              <Button isPrimary={false}>View All</Button>
            </Link>
          </div>
        </div>

        <div className="border-b-2 mt-16"></div>

        {/* top sell */}
        <h1 className="new-sell-title mt-[72px] font-extrabold text-[48px] mb-[55px] flex justify-center leading-[58px] font-[Integral]">
          TOP SELLING
        </h1>

        <div className="new-sell-products">
          <ProductGrid
            category={"sell"}
            isPending={isPendingProductSellList}
            listProducts={productSellList}
            className={"md:grid-cols-4 "}
            sliceNumberStart={4}
            sliceNumberEnd={8}
          />

          <div className="w-full flex justify-center mt-9">
            <Link to={"/shop"}>
              <Button isPrimary={false}>View All</Button>
            </Link>
          </div>
        </div>

        <div className="by-style h-[866px] mt-[80px] w-full bg-[#F0F0F0] px-16 py-[76px] flex flex-col items-center rounded-2xl">
          <h1 className="font-extrabold text-[48px] leading-[58px] mb-16 font-[Integral]">
            BROWSE BY DRESS STYLE
          </h1>
          <div className="grid grid-rows-[repeat(2,_289px)] grid-cols-12 gap-5 w-full text-[36px]">
            <div
              className="cursor-pointer row-span-1 col-span-4 pt-[22px] pl-[32px] rounded-3xl "
              style={{ backgroundImage: `url(${casualImage})` }}
            >
              Casual
            </div>

            <div
              style={{ backgroundImage: `url(${formalImage})` }}
              className="cursor-pointer row-span-1 col-span-8 pt-[22px] pl-[32px] rounded-3xl"
            >
              Formal
            </div>

            <div
              style={{ backgroundImage: `url(${partyImage})` }}
              className="cursor-pointer col-span-8  pt-[22px] pl-[32px] rounded-3xl"
            >
              Party
            </div>

            <div
              style={{ backgroundImage: `url(${gymImage})` }}
              className="cursor-pointer col-span-4 pt-[22px] pl-[32px] rounded-3xl"
            >
              Gym
            </div>
          </div>
        </div>

        <div className="w-full feedback">
          <h1 className="mt-[80px] font-extrabold text-[48px] leading-[58px] font-[Integral]">
            OUR HAPPY CUSTOMERS
          </h1>
          <Carousel
            className="flex mt-10 justify-between w-full relative z-20"
            responsive={responsive}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border-2 border-[#e7e6e6] rounded-2xl p-4 w-[400px] h-[240px] pt-7 px-8"
              >
                <div className="flex">{renderStars(review.rating, 36)}</div>
                <div className="flex gap-2 mt-[10px] mb-[7px]">
                  <span className="font-bold text-[20px] leading-6">
                    {review.name}
                  </span>
                  <TickIcon />
                </div>
                <p className="opacity-40 font-[Satoshi]">{review.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
