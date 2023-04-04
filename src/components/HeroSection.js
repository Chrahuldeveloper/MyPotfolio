import React from "react";

export default function HeroSection() {
  return (
    <div className="text-center my-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold">
         Developer & Business
      </h1>
      <p className="my-8 text-lg md:text-xl  font-semibold">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <img
        src="https://mattfarley.ca/img/mf-avatar.svg"
        className="mx-auto my-10"
        alt="my-avatar"
      />
      <img
        src="https://mattfarley.ca/img/hero-devices.svg"
        className="py-8 md:max-w-4xl mx-auto"
        alt="logo-avatar"
      />
    </div>
  );
}
