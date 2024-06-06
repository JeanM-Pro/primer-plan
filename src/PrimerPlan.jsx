import React from "react";
import { HomePage } from "./Pages/HomePage";
import { CafePage } from "./Pages/CafePage";
import { BarPage } from "./Pages/BarPage";

export const PrimerPlan = () => {
  return (
    <>
      <HomePage />
      <CafePage />
      <BarPage />
    </>
  );
};
