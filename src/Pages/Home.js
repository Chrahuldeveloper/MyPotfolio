import React, { useRef } from "react";
import {
  Navbar,
  HeroSection,
  About,
  Work,
  Collab,
  WorkingProjects,
  Testimonial,
  Banner,
  Footer,
} from "../components/index";
export default function Home() {
  const Aboutref = useRef();

  const ScroffToRef = () => {
    Aboutref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar ScroffToRef={ScroffToRef} />
      <HeroSection />
      <About Aboutref={Aboutref} />
      <Work />
      <Collab />
      <WorkingProjects />
      <Testimonial />
      <Banner />
      <Footer />
    </>
  );
}
