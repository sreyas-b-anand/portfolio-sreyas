import React from "react";
import { Link } from "react-scroll";
function MiniNavbar() {
  return (
    <div className="w-screen h-16 flex items-center justify-center shadow-md  bg-[#fef3c7] dark:bg-bg_mininav dark:text-white">
      <nav className="flex items-center justify-center gap-4 hover:cursor-pointer">
        <Link
          className="opacity-[0.8] hover:opacity-[1] text-[#494e56] font-semibold dark:font-normal dark:text-white "
          to={`about`}
          smooth={true}
        >
          About
        </Link>
        <Link
          className="opacity-[0.8] hover:opacity-[1] text-[#494e56] font-semibold dark:font-normal dark:text-white "
          to={`skills`}
          smooth={true}
        >
          Skills
        </Link>
      </nav>
    </div>
  );
}

export default MiniNavbar;
