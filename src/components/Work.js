import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { MdLogoDev } from "react-icons/md";
export default function Work() {
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    const res = [];
    const GetData = async () => {
      const docs = await getDocs(collection(db, "WHATIDO"));
      docs.forEach((doc) => {
        res.push(doc.data());
        setdisplay(res);
      });
    };
    GetData();
  }, []);

  console.log(display);

  return (
    <div className="flex justify-center my-10 md:my-0">
      <div className=" flex flex-col md:flex-row  divide-x-2 divide-y-2  -translate-y-14">
        {display?.map((item, i) => {
          return (
            <>
              <div className="bg-white text-center p-16 shadow-md border- max-w-[90vw] md:max-w-[30vw]">
                <div>
                  <MdLogoDev
                    size={60}
                    color="black"
                    className="mx-auto bg-green-300 bg-opacity-70 px-3 py-2 rounded-full"
                  />
                  <h1 className="text-xl font-bold my-4">{item.Profession}</h1>
                  <p>{item.Para}</p>
                  <p className="my-5 text-violet-600 font-semibold">
                    {item.Tittle}
                  </p>
                  <ul className="my-5 space-y-4 flex flex-col">
                    <li>{item.List1}</li>
                    <li>{item.List2}</li>
                    <li>{item.List3}</li>
                    <li>{item.List4}</li>
                    <li>{item.List5}</li>
                    <li>{item.List6}</li>
                    <li>{item.List7}</li>
                    <li>{item.List8}</li>
                    <li>{item.List9}</li>
                    <br />
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
