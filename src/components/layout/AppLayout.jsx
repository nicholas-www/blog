import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
