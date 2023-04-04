import React from "react";
import { TestimonialCard } from "./index";
export default function Testimonial() {
  return (
    <>
      <div className="-translate-y-36 text-center space-y-7">
        <h1 className="text-2xl md:text-3xl font-bold">Testimonials</h1>
        <p className="md:text-xl">People I've worked with have said some nice things...</p>
      </div>
      <TestimonialCard />
    </>
  );
}
