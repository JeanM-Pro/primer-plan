import React from "react";
import { HomePage } from "./Pages/HomePage";
import { CafePage } from "./Pages/CafePage";
import { BarPage } from "./Pages/BarPage";
import { RestaurantPage } from "./Pages/RestaurantPage";
import { Footer } from "./Pages/Footer";

export const PrimerPlan = () => {
  return (
    <>
      <HomePage />
      <CafePage />
      <BarPage />
      <RestaurantPage />
      <Footer />
    </>
  );
};
