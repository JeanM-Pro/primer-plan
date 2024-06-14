import React from "react";
import { HomePage } from "./Pages/HomePage";
import { CafePage } from "./Pages/CafePage";
import { BarPage } from "./Pages/BarPage";
import { RestaurantPage } from "./Pages/RestaurantPage";
import { Footer } from "./Pages/Footer";
import { Navbar } from "./components/Navbar";

export const PrimerPlan = () => {
  return (
    <>
      <HomePage />
      <Navbar />
      <CafePage />
      <BarPage />
      <RestaurantPage />
      <Footer />
    </>
  );
};
