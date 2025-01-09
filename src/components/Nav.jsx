import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="border-t-4 border-main bg-white shadow">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          <a href="#">
            <h2 className="text-main text-3xl">مـــكــتـبـك</h2>
          </a>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex space-y-4 md:space-y-0 flex-col md:flex-row items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-50 md:space-x-6`}
          >
            <Link
              to="/"
              className="block py-2 px-4 text-main hover:text-gray-800"
              onClick={toggleMenu}
            >
              الصفحة الرئيسية
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-main hover:text-gray-800"
              onClick={toggleMenu}
            >
              نبذه عنا
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
