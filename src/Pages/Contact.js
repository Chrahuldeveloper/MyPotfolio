import React from "react";
import Form from "../components/Form";

export default function Contact() {
  return (
    <>
      <div className="my-7 text-center space-y-7">
        <img
          className="mx-auto max-w-[15vw]  md:max-w-[8vw]"
          src="https://mattfarley.ca/img/mf-avatar.svg"
          alt=""
        />
        <p className="text-2xl md:text-3xl px-3  md:max-w-[50vw] md:mx-auto">
          Want to discuss a startup collaboration? I'm most definitely game.
        </p>
      </div>
      <Form/>
    </>
  );
}
