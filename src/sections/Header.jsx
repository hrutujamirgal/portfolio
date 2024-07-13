import { useState } from "react";
import { Link } from "react-scroll";

const navbar = ["Home", "Skills", "Projects", "Contact"]; // Removed "About" as it wasn't included in App.js

const Header = () => {
  const [activeItem, setActiveItem] = useState(navbar[0]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-5 fixed top-0 w-full transition-colors duration-300 bg-slate-950 bg-opacity-100 z-50">
      <ul className="flex space-x-2 md:space-x-5 text-lg font-serif text-white">
        {navbar.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer p-0 m-0 ${
              activeItem === item ? "text-base md:text-xl font-bold" : "hover:underline"
            }`}
            onClick={() => handleItemClick(item)}
          >
            <Link
              activeClass="active"
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
