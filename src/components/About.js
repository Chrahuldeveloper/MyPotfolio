import React from "react";

export default function About({ Aboutref }) {
  return (
    <div
      ref={Aboutref}
      className="bg-[#6e07f3] w-full h-[70vh] text-center pb-10 py-5 md:py-8 text-white -my-24"
    >
      <h1 className="text-2xl my-8 font-bold">
        Hi, I’m Rahul. Nice to meet you.
      </h1>
      <p className="px-8 my-7 md:leading-8 md:text-lg font-semibold">
        Since beginning my journey as a freelance, I've done remote work for few
        Clients <br />
        and collaborated with talented people to create digital products for
        both business and consumer use. <br /> I'm quietly confident, naturally
        curious, <br /> and perpetually working on improving my chops.
      </p>
    </div>
  );
}
