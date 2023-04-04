import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="-translate-y-7 max-w-sm mx-auto rounded-xl p-7 md:p-12 text-center bg-[#141c3a] text-white md:flex md:justify-evenly md:max-w-[80vw] md:items-center md:space-y-0">
      <h1 className="text-2xl font-bold">Start a Project</h1>
      <p className="text-sm my-6">
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee.
      </p>
      <Link to="/contact" className="my-6">
        <button className="border-2 px-8 py-2 hover:bg-[#5be9b9] hover:text-black duration-300 ease-in-out rounded-full border-[#5be9b9]">
          Lets do this
        </button>
      </Link>
    </div>
  );
}
