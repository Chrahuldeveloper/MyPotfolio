import React from "react";
import Project from "./Project";

export default function WorkingProjects() {
  return (
    <>
      <div className="bg-[#6e07f3] w-full h-[70vh] my-20 text-center pb-10  py-3 md:py-5 text-white ">
        <h1 className="text-2xl my-10 font-bold">My Business Projects</h1>
        <p className="px-8 my-7 md:leading-8 md:text-lg font-semibold">
          I'm a bit of a digital product junky. Over the years. I've used
          hundreds of web and <br /> mobile apps in different industries and
          verticals. Eventually, I decided <br /> that it would be a fun
          challenge to try designing and building my own.
        </p>
      </div>
      <Project />
    </>
  );
}
