import React from "react";
import { categoriesHome } from "../utils/categories";

export const HomePage = () => {
  return (
    <div className="h-[94vh] flex flex-col w-screen ">
      <img
        src="https://i.ibb.co/f0GSHk8/fondo-Home.jpg"
        alt="imagen-de-fondo"
        className="w-full"
      />
      <div className="relative w-full h-4">
        <div className="w-full flex items-center top-[-26px] absolute">
          <hr className="h-2 bg-white flex-grow" />
          <img
            src="https://i.ibb.co/Vx7FMyq/cardapio-text.png"
            alt="texto"
            className=""
          />
          <hr className="h-2 bg-white flex-grow" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center grow justify-around">
        {categoriesHome.map((c, i) => {
          return (
            <a href={`#${c.enlace}`} className="w-[80%]" key={i}>
              <div className="flex items-center bg-[#99141B] w-full m px-4 py-2 rounded-[10px]">
                <img src={c.icono} alt="icono" />
                <span className="text-white uppercase text-lg ml-4">
                  {c.name}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
