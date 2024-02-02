import React, { useState } from "react";
import Header from "../components/common/header";
import TabOptions from "../components/common/tabOptions";
import Footer from "../components/common/footer";
import Delivery from "../components/delivery";
import DiningOut from "../components/diningOut";
import Nightlife from "../components/nightlife";
import Footer2 from "../components/common/footer2";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
      <Footer2 />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "NightLife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default Homepage;
