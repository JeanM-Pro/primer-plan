import { bar } from "../utils/bar";

export const BarPage = () => {
  return (
    <div id="bar" className="w-full relative mt-14 pt-8">
      <div className="absolute  top-[-24px] w-full  px-2 ">
        <div className="border-[#E51D27] border rounded-md w-full pl-2">
          <p className="text-2xl">Bar</p>
        </div>
      </div>

      {bar.map((c, index) => {
        return (
          <div
            className="overflow-hidden w-full h-[182px] relative mb-4"
            key={index}
          >
            <img
              src={c.icono}
              alt="foto de cafe"
              className="scale-x-[1.3] transform  w-full h-full absolute z-10 scale-[1.8]"
            />

            <div
              className={`absolute top-6 z-20 ${
                index === 7 || index === 6 || index === 5 || index === 4
                  ? "right-0 rounded-tl-[24px]"
                  : "rounded-tr-[24px] left-0"
              } bg-[#D9D9D9] bg-opacity-60  w-[60%]`}
            >
              <div
                className={`bg-black bg-opacity-20 w-full px-4 pt-1 ${
                  index === 7 || index === 6 || index === 5 || index === 4
                    ? "right-0 rounded-tl-[24px]"
                    : "rounded-tr-[24px] left-0"
                }`}
              >
                <p className="font-bold text-sm">{c.nombre}</p>
              </div>
              <div className="pb-1 px-4">
                <p className="text-xs pt-1">{c.receta}</p>
                <p className="text-sm font-bold mt-1">{`${c.precio} R$`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
