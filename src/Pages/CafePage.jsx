import TextoCafe from "../images/CafePage/cafe-texto.png";
import { cafes } from "../utils/cafes";

export const CafePage = () => {
  return (
    <div className="w-full relative mt-8 pt-8">
      <img
        src={TextoCafe}
        alt="texto"
        className="absolute left-[8px] top-[-24px]"
        id="cafe"
      />

      {cafes.map((c, index) => {
        return (
          <div
            className="overflow-hidden w-full h-[182px] relative mb-[10px]"
            key={index}
          >
            <img
              src={c.icono}
              alt="foto de cafe"
              className={`${
                index === 4 ? "scale-x-[1.3]" : "-scale-x-[1.3]"
              } transform  w-full h-full absolute z-10 scale-[1.8] `}
            />

            <div
              className={`absolute top-6 z-20 ${
                index === 7 || index === 6 || index === 5 || index === 4
                  ? "right-0 rounded-tl-[24px]"
                  : "rounded-tr-[24px] left-0"
              } bg-[#D9D9D9] bg-opacity-60 px-4 w-[60%]  py-1`}
            >
              <p className="font-bold text-sm">{c.nombre}</p>
              <p className="text-xs ">{c.receta}</p>
              <p className="text-right text-sm font-bold mt-1">{`${c.precio} R$`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
