import React, { useEffect, useLayoutEffect } from "react";
import Button from "./Button";
import VersaceIcon from "../assets/Icon/VersaceIcon";
import ZaraIcon from "../assets/Icon/ZaraIcon";
import GucciIcon from "../assets/Icon/GucciIcon";
import PradaIcon from "../assets/Icon/PradaIcon";
import CalvinKleinIcon from "../assets/Icon/CalvinKleinIcon";
import ScrollReveal from "scrollreveal";
import bannerImg from "../assets/img/bannerImg.png";

function Banner() {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
    opacity: 0.8,
  });

  sr.reveal(".main-left-side", { origin: "top" });
  sr.reveal(".main-right-side");
  sr.reveal(".brands", {
    distance: "30px",
    duration: 2500,
    reset: false,
  });

  return (
    <div>
      <div className="h-[663px] bg-[#F2F0F1] overflow-hidden">
        <div className="container">
          <div className="flex">
            {/* left-side */}
            <div className="w-[53%] main-left-side">
              <h1 className="font-extrabold text-[64px] leading-[64px] pt-[103px] font-[Integral]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="mt-8 opacity-60 font-light">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button className="mt-8">Shop now</Button>
              <div className="flex gap-12 w-[596px] justify-between mt-12 mx-2">
                <div>
                  <h1 className="text-[40px] font-bold">200+</h1>
                  <p className="opacity-60 font-light text-sm whitespace-nowrap">
                    International Brands
                  </p>
                </div>
                <div className="border-r-[2px]" />
                <div>
                  <h1 className="text-[40px] font-bold">2,000+ </h1>
                  <p className="opacity-60 font-light text-sm whitespace-nowrap">
                    High-Quality Products
                  </p>
                </div>
                <div className="border-r-[2px]" />
                <div>
                  <h1 className="text-[40px] font-bold">30,000+</h1>
                  <p className="opacity-60 font-light text-sm whitespace-nowrap">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* right-side */}
            {/* style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "120%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginBottom: "-120px",
              }} */}
            <div
              className="w-[50%] main-right-side bg-no-repeat mb-[-120px] bg-center"
              style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "120%",

              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="h-[122px] bg-black w-full brands">
        <div className="container h-full">
          <div className="flex justify-between h-full items-center">
            <VersaceIcon />
            <ZaraIcon />
            <GucciIcon />
            <PradaIcon />
            <CalvinKleinIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
