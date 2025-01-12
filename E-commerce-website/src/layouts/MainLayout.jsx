import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Breadcumb from "../components/Breadcumb";
import ScrollToTop from "../helpers/ScrollToTop ";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="mt-[96px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
