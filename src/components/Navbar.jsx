import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        isFixed ? "fixed" : "hidden"
      } w-full h-[40px] flex items-center justify-between text-[15px] bg-[#E51D27] text-white px-4 
        top-0  z-50
      `}
    >
      <div className="flex">
        <a className="mr-2" href="#home">
          Home
        </a>
        <a className="mr-2" href="#cafe">
          Cafe
        </a>
        <a className="mr-2" href="#bar">
          Bar
        </a>
        <a className="" href="#restaurante">
          Restaurante
        </a>
      </div>
      <a href="#home">
        <img
          src="https://i.ibb.co/ggYYfjP/icon-navbar.png"
          alt="icono de cafe"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
};
