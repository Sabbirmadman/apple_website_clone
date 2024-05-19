import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { navLists } from "../constants";
import { appleImg, searchImg, bagImg } from "../utils";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useGSAP(() => {
    if (showMenu) {
      gsap.to("#menu", { y: "100%", duration: 0.5 });
    }
    else {
      gsap.to("#menu", { y: "0", duration: 0.5 });
    }
  }, [showMenu]);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex relative z-10">
      <nav className="flex w-full screen-max-width justify-between items-center">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-baseline max-sm:justify-end">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
          <HiMenuAlt4
            size={20}
            className="cursor-pointer hidden max-sm:block"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>
      <div
        id="menu"
        className={`fixed -top-[100vh] right-0 h-[100vh] w-full hidden max-sm:block`}
      >
        <div className="flex flex-col h-full  bg-zinc p-5 pt-10 relative">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 py-5 text-xl cursor-pointer text-white  transition-all flex items-center justify-between group "
            >
              <span >{nav} </span>
              <MdOutlineChevronRight
                className="opacity-0 group-hover:opacity-100  transition-opacity"

              />
            </div>
          ))}

          <IoCloseOutline
            size={20}
            className="cursor-pointer absolute top-5 right-5"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
