import React, { useEffect, useState } from "react";
import { BiGitBranch } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { FaRegHandshake } from "react-icons/fa";


export default function Project() {
  const [Workingon, setWorkingon] = useState([]);

  useEffect(() => {
    const res = [];
    const GetData = async () => {
      const docs = await getDocs(collection(db, "MYWORK"));
      docs.forEach((doc) => {
        res.push(doc.data());
        setWorkingon(res);
      });
    };
    GetData();
  }, []);

  return (
    <div className="-translate-y-56 flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-y-7 md:gap-x-5 md:place-items-center md:justify-center px-4 md:px-6">
      {Workingon?.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="max-w-md text-center  md:my-0 bg-white border-[1px] border-slate-100 rounded-xl shadow-sm p-10 space-y-5"
            >
              <h1 className="text-2xl font-bold">{item.Tittle}</h1>
              <p className="text-sm">{item.Para}</p>
              <div className="flex justify-center">
                <button
                  className={`${
                    item.Process === "Built" ? "bg-green-200" : "bg-gray-300"
                  } flex items-center space-x-3 text-sm px-6 py-2 rounded-lg`}
                >
                  <h1 className="text-lg">{item.Process}</h1>
                  {item.Process === "in development" ? (
                    <BiGitBranch size={20} color="black" />
                  ) : item.Process === "Validating idea" ? (
                    <HiOutlineLightBulb size={20} color="black" />
                  ) : item.Process === "Built" ? (
                    <FaRegHandshake size={20} color="black" />
                  ) : null}
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
