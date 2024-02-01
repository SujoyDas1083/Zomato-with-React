import React from "react";
import "./diningOut.css";
import HeaderSlider from "./slider/headerSlider";
import Banner from "./banner/banner";
import Content from "./content/content";

const DiningOut = () => {
  return (
    <div className="diningout">
      <HeaderSlider />
      <Banner />
      <Content />
    </div>
  );
};

export default DiningOut;
