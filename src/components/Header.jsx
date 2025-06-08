import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBars, faXmark);

const Btn = ({name}) => (
  <button className="text-3xl pt-3 pb-4 w-56 text-amber-50 bg-gray-700/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-500">
    {name}
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  // bg-emerald-700
  return (
    <>
      <div className="header relative">
        <div className="mt-0 bg-gray-700/20 backdrop-blur-lg backdrop-filter border border-gray-500 flex justify-between items-center text-xl text-gray-50 p-5 m-3 rounded-xl shadow-xl">
          <p>SCR</p>

          <div className="relative h-8 w-8">
            {/* Close Icon */}
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggle}
              className={`absolute top-1 left-0 w-10 h-10 cursor-pointer transform transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "opacity-100 scale-100 rotate-0 pointer-events-auto"
                    : "opacity-0 scale-90 rotate-45 pointer-events-none"
                }`}
            />

            {/* Menu Icon */}
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggle}
              className={`absolute top-1 left-0 w-10 h-10 cursor-pointer transform transition-all duration-300 ease-in-out
                ${
                  isOpen
                    ? "opacity-0 scale-90 rotate-45 pointer-events-none"
                    : "opacity-100 scale-100 rotate-0 pointer-events-auto"
                }`}
            />
          </div>
        </div>
        <nav
          className={`text-3xl mx-auto my-0 absolute z-10 top-24 left-3 right-3 flex flex-col gap-7 bg-gray-700/20 backdrop-blur-xl backdrop-filter border border-gray-500 text-white  
                p-7 rounded-xl shadow-xl transition duration-300 ease-in-out  ${
                  isOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
        >
          <a href="">To Buy</a>
          <a href="">Team</a>
          <a href="">Cooperation</a>
          <a href="">Delivery and payment</a>
          <a href="">Contacts</a>
        </nav>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <article className="mt-10 mx-3">
      <h2 className="text-gray-100 text-5xl font-bold">
        Specialty Coffee Roastery
      </h2>
      <p className="text-gray-100 text-3xl mt-11">
        Майстерня спешалті кави. Міце де кавове зерно починає нове життя.
      </p>
      <p className="text-gray-100 text-3xl mt-11">Смакуй.</p>

      <div className="flex flex-col gap-5 mt-16 items-center">
        <Btn name="Еспресо" />
        <Btn name="Фільтр" />
        <Btn name="Дріп" />
      </div>
    </article>
  );
};

const Header = () => {
  return (
    <>
      <div className="bg-[url(/background.webp)] bg-size-[400%] pt-4 h-[850px]">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Header;
