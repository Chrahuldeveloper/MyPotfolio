import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function TestimonialCard() {
  const CardData = [
    {
      Para: "Hello Rahul Thank u so much for ur efforts on our project Veterinary medicine management system.U really spent a lot of time nd also scheduled some meets to make us easily understand the concept. Ur dedication Is really appreciable. At the end of the day our project has been successfully completed the execution nd we also scored gud marks .thank u once again",
      Name: "Abhinaya",
      Profession: "Student.",
    },
    {
      Para: "I am thrilled to share my experience working with Rahul on the development of my website. The result was a stunning, user-friendly website that far exceeded my expectations. I have received numerous compliments on the site's design and functionality, and I owe it all to Rahul's hard work and dedication.",
      Name: "Akash",
      Profession: "Youtuber Content Creator",
    },
  ];

  const [Cardindex, setCardindex] = useState(0);

  const LeftSlide = () => {
    if (Cardindex === 0) {
      return;
    }
    setCardindex(Cardindex - 1);
  };
  const RightSlide = () => {
    setCardindex(Cardindex + 1);

    if (Cardindex === CardData.length - 1) {
      setCardindex(0);
    }
  };

  return (
    <>
      <div
        className="text-center space-y-5 mx-auto max-w-md -translate-y-28 px-4"
        key={Cardindex}
      >
        <p className="text-lg  font-extralight">{CardData[Cardindex].Para}</p>
        <h1 className="text-xl font-bold">{CardData[Cardindex].Name}</h1>
        <p className=" font-semibold">{CardData[Cardindex].Profession}</p>
        <div className="flex items-start justify-center space-x-5">
          <AiOutlineArrowLeft
            className="bg-[#6e07f3] hover:bg-white hover:border-2 fill-white hover:fill-black hover:rounded-full ease-in-out duration-500 hover:border-[#6e07f3] p-2 rounded-full cursor-pointer"
            size={43}
            onClick={LeftSlide}
          />
          <AiOutlineArrowRight
            className="bg-[#6e07f3] hover:bg-white hover:border-2 fill-white hover:fill-black hover:rounded-full ease-in-out duration-500 hover:border-[#6e07f3] p-2 rounded-full cursor-pointer"
            size={43}
            color="white"
            onClick={RightSlide}
          />
        </div>
      </div>
    </>
  );
}
