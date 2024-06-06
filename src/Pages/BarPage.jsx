import textBar from "../images/BarPage/bar-text.png";

export const BarPage = () => {
  return (
    <div className="w-full relative mt-14 pt-8">
      <img
        src={textBar}
        alt="texto"
        className="absolute left-[8px] top-[-24px]"
        id="bar"
      />
    </div>
  );
};
