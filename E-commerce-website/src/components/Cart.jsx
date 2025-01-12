import React from "react";
import TrashIcon from "../assets/Icon/TrashIcon";
import MinusIcon from "../assets/Icon/MinusIcon";
import PlusIcon from "../assets/Icon/PlusIcon";
import Button from "./Button";
import NextIcon from "../assets/Icon/NextIcon";

function Cart() {
  return (
    <div>
      <div className="container">
        <h1 className="font-extrabold text-[40px] mb-[55px] leading-[58px] font-[Integral]">
          YOUR CART
        </h1>
        <div className="flex gap-4">
          {/* left side */}
          <div className="w-[715px] px-6 py-5 border-2 rounded-2xl flex flex-col gap-5">
            <div className="flex justify-between">
              <div className="h-[124px] flex gap-4">
                <img
                  className="w-[124px] h-[124px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eP-yBYB1oXWpDlx8O6kK4G0Qe3AcAzGa1iMlwfd~WYO9XTeuARIS~pRzuJ7bhGo5s70tL~GmddZcFN2JrWZL7~qY6~srJ9a9kpqCFBFF6IX~Sn1C5uiTFM6zBj0h1vjmetHpw-1m7LAzGMhmo60rNzio-LE0S8el2kR3m-4aGX7Tj3zyYXiAR1qE5bdFQFyaAKTUYm~65kGuwahfXJk0nLgQsSoABX5rT7WfZYC0Hg7zPlpxOUUN3DaqjDJ-iZvj4yX6MLCFOW9h7HeQwJhU0XOTtm5SnkSK34p-AauzDHM5HEJhl5kDpNPhnXBPM8wVbcpa-ZLkGHfV9xOm-UGKlg__"
                  alt=""
                />
  
                <div className="">
                  <h1 className="text-[20px] font-bold">
                    Gradient Graphic T-shirt
                  </h1>
                  <span>
                    Size: <label className="opacity-65">Large</label>
                  </span>{" "}
                  <br />
                  <span>
                    Color: <label className="opacity-65">White</label>
                  </span>
                  <p className="text-[24px] font-bold">$145</p>
                </div>
              </div>
              <div className="flex items-end justify-between flex-col">
                <TrashIcon  />
                
                <div className="bg-[#F0F0F0] flex items-center px-4 rounded-2xl h-[44px]">
                  <MinusIcon />
                  <span className="mx-5">1</span>
                  <PlusIcon />
                </div>
              </div>
            </div>

            <div className="border-b-2"></div>


            <div className="flex justify-between">
              <div className="h-[124px] flex gap-4">
                <img
                  className="w-[124px] h-[124px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eP-yBYB1oXWpDlx8O6kK4G0Qe3AcAzGa1iMlwfd~WYO9XTeuARIS~pRzuJ7bhGo5s70tL~GmddZcFN2JrWZL7~qY6~srJ9a9kpqCFBFF6IX~Sn1C5uiTFM6zBj0h1vjmetHpw-1m7LAzGMhmo60rNzio-LE0S8el2kR3m-4aGX7Tj3zyYXiAR1qE5bdFQFyaAKTUYm~65kGuwahfXJk0nLgQsSoABX5rT7WfZYC0Hg7zPlpxOUUN3DaqjDJ-iZvj4yX6MLCFOW9h7HeQwJhU0XOTtm5SnkSK34p-AauzDHM5HEJhl5kDpNPhnXBPM8wVbcpa-ZLkGHfV9xOm-UGKlg__"
                  alt=""
                />
  
                <div className="">
                  <h1 className="text-[20px] font-bold">
                    Gradient Graphic T-shirt
                  </h1>
                  <span>
                    Size: <label className="opacity-65">Large</label>
                  </span>{" "}
                  <br />
                  <span>
                    Color: <label className="opacity-65">White</label>
                  </span>
                  <p className="text-[24px] font-bold">$145</p>
                </div>
              </div>
              <div className="flex items-end justify-between flex-col">
                <TrashIcon  />
                
                <div className="bg-[#F0F0F0] flex items-center px-4 rounded-2xl h-[44px]">
                  <MinusIcon />
                  <span className="mx-5">1</span>
                  <PlusIcon />
                </div>
              </div>
            </div>

            <div className="border-b-2"></div>

            <div className="flex justify-between">
              <div className="h-[124px] flex gap-4">
                <img
                  className="w-[124px] h-[124px] object-cover"
                  src="https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eP-yBYB1oXWpDlx8O6kK4G0Qe3AcAzGa1iMlwfd~WYO9XTeuARIS~pRzuJ7bhGo5s70tL~GmddZcFN2JrWZL7~qY6~srJ9a9kpqCFBFF6IX~Sn1C5uiTFM6zBj0h1vjmetHpw-1m7LAzGMhmo60rNzio-LE0S8el2kR3m-4aGX7Tj3zyYXiAR1qE5bdFQFyaAKTUYm~65kGuwahfXJk0nLgQsSoABX5rT7WfZYC0Hg7zPlpxOUUN3DaqjDJ-iZvj4yX6MLCFOW9h7HeQwJhU0XOTtm5SnkSK34p-AauzDHM5HEJhl5kDpNPhnXBPM8wVbcpa-ZLkGHfV9xOm-UGKlg__"
                  alt=""
                />
  
                <div className="">
                  <h1 className="text-[20px] font-bold">
                    Gradient Graphic T-shirt
                  </h1>
                  <span>
                    Size: <label className="opacity-65">Large</label>
                  </span>{" "}
                  <br />
                  <span>
                    Color: <label className="opacity-65">White</label>
                  </span>
                  <p className="text-[24px] font-bold">$145</p>
                </div>
              </div>
              <div className="flex items-end justify-between flex-col">
                <TrashIcon  />
                
                <div className="bg-[#F0F0F0] flex items-center px-4 rounded-2xl h-[44px]">
                  <MinusIcon />
                  <span className="mx-5">1</span>
                  <PlusIcon />
                </div>
              </div>
            </div>

          </div>

          {/* right side */}
          <div className="w-[505px] h-[325px] px-6 py-5 rounded-2xl border-2">
            <h1 className="text-[24px] font-bold leading-8">Order Summary</h1>
            <div className="mt-6 flex flex-col gap-4"> 
              <div>
                <span>Subtotal</span>
                <span className="float-right font-bold text-[20px]">$565</span>
              </div>
              <div>
                <span>Delivery Fee</span>
                <span className="float-right font-bold text-[20px]">$15</span>
              </div>

            <div className="border-b-2"></div>

            <div>
                <span>Total</span>
                <span className="float-right font-bold text-[24px]">$467</span>
              </div>

              <Button isPrimary={true} className={'w-full'}>
                <div className="flex items-center justify-center gap-4">
                  <span>Go to Checkout</span>
                  <NextIcon color={'#FFF'}/>
                </div>
                </Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
