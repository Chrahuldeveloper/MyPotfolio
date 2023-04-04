import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link }  from 'react-router-dom'
export default function Collab() {
  return (
    <div className="text-center my-7 ">
      <h1 className="text-2xl font-bold">
        Interested in collaborating with me?
      </h1>
      <p className="md:text-lg my-7">
        I’m always open to discussing product design work or partnership
        opportunities.
      </p>
      <Link to="/contact" className="my-7">
      <button className="px-7 py-2.5 rounded-full border-2 border-violet-500 text-violet-600 font-semibold hover:bg-violet-600 hover:text-white ease-in-out duration-500 flex items-center space-x-3 mx-auto">
        <BsFillChatDotsFill size={20} />
        <h1>Start a Conversation</h1>
      </button>
      </Link>
    </div>
  );
}
