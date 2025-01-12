import React from "react";
import Button from "./Button";
import LetterIcon from "../assets/Icon/LetterIcon";
import TwitterIcon from "../assets/Icon/TwitterIcon";
import Facebook from "../assets/Icon/FacebookIcon";
import FacebookIcon from "../assets/Icon/FacebookIcon";
import InstagramIcon from "../assets/Icon/InstagramIcon";
import GithubIcon from "../assets/Icon/GithubIcon";
import VisaIcon from "../assets/Icon/VisaIcon";
import BankCradIcon from "../assets/Icon/BankCradIcon";
import PaybalIcon from "../assets/Icon/PaybalIcon";
import ApplePayIcon from "../assets/Icon/ApplePayIcon";
import GooglePay from "../assets/Icon/GooglePay";

function Footer() {
  return (
    <div className="h-[590px] w-full mt-[80px] relative ">
      <div className="container w-full z-20 relative">
        <div className="h-[180px] bg-black rounded-3xl px-[64px] py-[37px] w-full flex justify-between">
          <div className="text-[40px] text-white w-[550px] leading-[45px] font-extrabold py-2 font-[Integral]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </div>
          <div className="flex flex-col w-[350px] justify-between">
            <div className="h-12 bg-white rounded-3xl flex items-center gap-4 px-4">
              <LetterIcon />
              <input
                type="text"
                placeholder="Enter your email address"
                className="h-12 rounded-3xl focus:outline-none placeholder-font-extralight placeholder:font-extralight"
              />
            </div>
            <Button isPrimary={false} className={"bg-white w-[350px]"}>
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full  h-[500px] bg-[#F0F0F0] absolute top-[90px] z-10">
       <div className="container">
          <div className=" w-full h-full flex justify-between pt-[140px]">
            <div className="w-[248px]">
              <p className="font-extrabold text-[34px] leading-10 font-[Integral]">SHOP.CO</p>
              <p className="mt-[25px] opacity-60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="mt-[35px] flex gap-3">
                <div className="cursor-pointer">
                  <TwitterIcon />
                </div>
                <div className="cursor-pointer">
                  <FacebookIcon />
                </div>
                <div className="cursor-pointer">
                  <InstagramIcon />
                </div>
                <div className="cursor-pointer">
                  <GithubIcon />
                </div>
              </div>
            </div>
  
            <div className="">
              <span>COMPANY</span>
              <ul className="mt-[16px] flex flex-col gap-2">
                <li className="cursor-pointer font-light opacity-60">About</li>
                <li className="cursor-pointer font-light opacity-60">Features</li>
                <li className="cursor-pointer font-light opacity-60">Works</li>
                <li className="cursor-pointer font-light opacity-60">Career</li>
              </ul>
            </div>
  
            <div className="">
              <span>HELP</span>
              <ul className="mt-[16px] flex flex-col gap-2">
                <li className="cursor-pointer font-light opacity-60">
                  Customer Support
                </li>
                <li className="cursor-pointer font-light opacity-60">
                  Delivery Details
                </li>
                <li className="cursor-pointer font-light opacity-60">
                  Terms & Condition
                </li>
                <li className="cursor-pointer font-light opacity-60">
                  Privacy Policy
                </li>
              </ul>
            </div>
  
            <div className="">
              <span>FAQ</span>
              <ul className="mt-[16px] flex flex-col gap-2">
                <li className="cursor-pointer font-light opacity-60">Account</li>
                <li className="cursor-pointer font-light opacity-60">
                  Manage Deliveries
                </li>
                <li className="cursor-pointer font-light opacity-60">Orders</li>
                <li className="cursor-pointer font-light opacity-60">Payments</li>
              </ul>
            </div>
  
            <div className="">
              <span>RESOURCES</span>
              <ul className="mt-[16px] flex flex-col gap-2">
                <li className="cursor-pointer font-light opacity-60">
                  Free eBooks
                </li>
                <li className="cursor-pointer font-light opacity-60">
                  Development Tutorial
                </li>
                <li className="cursor-pointer font-light opacity-60">
                  How to - Blog
                </li>
                <li className="cursor-pointer font-light opacity-60">
                  Youtube Playlist
                </li>
              </ul>
            </div>
            
          </div>
          <div className="border-b-2 mt-[25px]"></div>
          <div className="flex justify-between">
            <p className="mt-3 opacity-50">Shop.co @ 2024-2025, by Trần Đức Vương</p>
            <div className="flex gap-3 ">
              <VisaIcon />
              <BankCradIcon />
              <PaybalIcon />
              <ApplePayIcon  />
              <GooglePay />
            </div>
            </div>
         
       </div>
        
      </div>
    </div>
  );
}

export default Footer;
