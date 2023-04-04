import React from "react";
import { BsTwitter, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="bg-[#6e07f3] text-white h-auto space-y-6 text-center">
      <h1 className="py-16 text-xl md:text-2xl font-extralight px-5">
        Living, learning, & leveling up one day at a time.
      </h1>
      <div className=" -translate-y-6 justify-center flex items-center space-x-5">
        <a href={"https://twitter.com/ChRahul_dev"}>
          <BsTwitter size={26} color="white" />
        </a>
        <a href={"https://www.linkedin.com/in/ch-rahul-2b42b4258/"}>
          <BsLinkedin size={26} color="white" />
        </a>
        <a href={"https://www.instagram.com/binary_cave/"}>
          <BsInstagram size={26} color="white" />
        </a>
        <a href={"https://github.com/Chrahuldeveloper"}>
          <BsGithub size={26} color="white" />
        </a>
      </div>
      <p className="pb-3">Handcrafted by me @ChRahul</p>
    </div>
  );
}
