import React from "react";
import imagen1 from "../images/HomePage/fondoHome.jpg";
import imagen2 from "../images/HomePage/cardapio-text.png";
import { categoriesHome } from "../utils/categories";

export const HomePage = () => {
  return (
    <div className="h-screen flex flex-col w-screen bg-[#D2CECE]">
      <img src={imagen1} alt="imagen-de-fondo" className="w-full" />
      <div className="relative w-full bg-white h-[6px] shadow-md">
        <img
          src={imagen2}
          alt="texto"
          className="absolute left-1/2 transform -translate-x-1/2 top-[-24px]"
        />
      </div>
      <div className="w-full flex flex-col items-center grow justify-around">
        {categoriesHome.map((c, i) => {
          return (
            <div
              key={i}
              className="flex items-center bg-[#99141B] w-[80%] m px-4 py-2 rounded-[10px]"
            >
              <img src={c.icono} alt="icono" />
              <span className="text-white uppercase text-lg ml-4">
                {c.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
