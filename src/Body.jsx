import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      {/* to make the child components work  */}
      <Outlet />
      <Footer />
    </div>

  );
};

export default Body;
