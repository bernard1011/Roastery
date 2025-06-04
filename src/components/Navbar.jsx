import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div className="header relative">
        <div className="bg-emerald-700 flex justify-between items-center text-xl text-gray-50 p-5 m-3 rounded-xl shadow-xl">
          <p>Coffee Roastery</p>

          <div className="relative h-8 w-8">
            {/* Close Icon */}
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
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
              icon="fa-solid fa-bars"
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
          className={`text-xl mx-auto my-0 absolute top-23 left-3 right-3 flex flex-col bg-emerald-700 text-white  
              p-4 rounded-xl shadow-xl transition duration-300 ease-in-out  ${
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

export default Navbar;
