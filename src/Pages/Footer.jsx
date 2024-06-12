import { iconos } from "../utils/footer";

export const Footer = () => {
  return (
    <div className="grid grid-cols-2 gap-2 bg-[#550B0F] py-3">
      {iconos.map((icono, index) => (
        <div key={index} className="flex items-center pl-2 py-1 ">
          <img
            src={icono.icono}
            alt={icono.icono}
            className="h-[32px] w-[32px]"
          />

          <span className="text-white text-xs ml-2 text-left">
            {icono.data}
          </span>
        </div>
      ))}
    </div>
  );
};
