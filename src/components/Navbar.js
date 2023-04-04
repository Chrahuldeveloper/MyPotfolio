import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
export default function Navbar({ ScroffToRef }) {
  const [showmenu, setshowmenu] = useState(false);

  const ToggleMenu = () => {
    setshowmenu(!showmenu);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-6">
        <div>
          <h1 className="text-2xl text-violet-600">Welcome!</h1>
        </div>
        <div>
          {showmenu ? (
            <>
              <RxCross2
                size={30}
                color="#8441ed"
                className="md:hidden cursor-pointer"
                onClick={ToggleMenu}
              />
            </>
          ) : (
            <BiMenuAltRight
              size={30}
              className="md:hidden cursor-pointer"
              color="#8441ed"
              onClick={ToggleMenu}
            />
          )}

          <button
            onClick={ScroffToRef}
            className="hidden md:block border-2 text-violet-600 px-6 py-2.5 rounded-full border-[#6e07f3] font-semibold hover:bg-[#6e07f3] hover:border-0 hover:text-white hover:ease-in-out duration-500"
          >
            About Me
          </button>
        </div>
      </nav>
      <div>
        {showmenu ? (
          <>
            <div className="flex md:hidden justify-center items-center">
              <button
                onClick={ScroffToRef}
                className="border-2 text-violet-600 px-6 py-2.5 rounded-full border-[#6e07f3] font-semibold hover:bg-[#6e07f3] hover:border-0 hover:text-white hover:ease-in-out duration-500"
              >
                About Me
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
