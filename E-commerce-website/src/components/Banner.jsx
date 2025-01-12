import React, { useEffect, useLayoutEffect } from "react";
import Button from "./Button";
import VersaceIcon from "../assets/Icon/VersaceIcon";
import ZaraIcon from "../assets/Icon/ZaraIcon";
import GucciIcon from "../assets/Icon/GucciIcon";
import PradaIcon from "../assets/Icon/PradaIcon";
import CalvinKleinIcon from "../assets/Icon/CalvinKleinIcon";
import ScrollReveal from "scrollreveal";

function Banner() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 2500,
      delay: 300,
      reset: true,
      opacity: 0.8
    });

    sr.reveal('.main-left-side', { origin: 'top' });
    sr.reveal('.main-right-side');
    sr.reveal('.brands', {
      distance: '30px',
      duration: 2500,
      reset: false
    });
  }, []);

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
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
              </p>
              <Button className={"mt-8"}>Shop now</Button>
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
            <div className="w-[47%] main-right-side">
              <img
                src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsH7AlttkpRzRTBf~g0YV5pGsjpZUubt2cJD55kSCuTFxnFQk-gJ8TUU3KypXyHVloZn9Sv0b9Pvufdbn-rAhII1rAExRA8v1CPyQc8dOvYwLWBCdBibDn64QgQCjHnCkypGstoKZu3vhVRyqZqP4QXyjO1goxvO5sto0GSUocEphmxNDaa0cbEVyecQ3wP8i1TDSrlckTcWB5KZfDpmwkz4PQql0O4J34cutcRnKCTRvBb526qIzNAnmD7eRLAB8Gdkg9yVWBKLqjjA0s9zNYMbzE~iKsopQQ75WBpi4K8IP5hHxMDM3o-bZEBmNKo2X8ivob5hw-lySTl9vdLbng__"
                alt=""
              />
            </div>
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
