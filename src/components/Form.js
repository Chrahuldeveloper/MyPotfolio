import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import Swal from "sweetalert2";
export default function Form() {
  const [Userdetails, setUserdetails] = useState({
    Name: "",
    Email: "",
    project: "",
    interest: "",
    AdditionalDetails: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (
      Userdetails.Name &&
      Userdetails.Email &&
      Userdetails.project &&
      Userdetails.interest !== "" 
    ) {
      await addDoc(collection(db, "USERS"), Userdetails);
      Swal.fire({
        title: "Thank you for Reaching Out.will contact you Soon..",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff",
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `,
      });
    } else {
      alert("Please fill");
    }
  };

  return (
    <>
      <form className="flex flex-col justify-center md:ml-96 px-5 pb-3 space-y-6">
        <div className="flex flex-col space-y-2  ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={Userdetails.Name}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, Name: e.target.value });
            }}
            id="name"
            className="border-[1px] max-w-[90vw]  md:max-w-[40vw] p-2 border-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            value={Userdetails.Email}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, Email: e.target.value });
            }}
            id="Email"
            className="border-[1px] max-w-[90vw] p-2 md:max-w-[40vw]  border-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col  space-y-2">
          <label htmlFor="Which project?">Which project?</label>
          <input
            type="text"
            id="Which project?"
            value={Userdetails.project}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, project: e.target.value });
            }}
            className="border-[1px] max-w-[90vw] p-2 md:max-w-[40vw]  border-slate-200 outline-none"
          />
        </div>
        <div className="flex flex-col  space-y-2">
          <label htmlFor="Your interest">Your interest</label>
          <select
            name="interest"
            id="Your interest"
            value={Userdetails.interest}
            onChange={(e) => {
              setUserdetails({ ...Userdetails, interest: e.target.value });
            }}
            className="outline-none border-[1px]  max-w-[90vw]  md:max-w-[40vw] border-slate-200 p-3"
          >
            <option value="" />
            <option value="Client">Client</option>
            <option value="investor">investor</option>
          </select>
        </div>
        <div className="flex flex-col  space-y-2">
          <label htmlFor="Additional details">Additional details</label>
          <textarea
            type="text"
            id="Additional details"
            value={Userdetails.AdditionalDetails}
            onChange={(e) => {
              setUserdetails({
                ...Userdetails,
                AdditionalDetails: e.target.value,
              });
            }}
            cols={8}
            rows={8}
            className="border-[1px]  max-w-[90vw] p-2 md:max-w-[40vw]  border-slate-200 outline-none"
          />
        </div>
        <button
          onClick={SubmitForm}
          className="px-9  py-2 rounded-full border-2 border-violet-500 text-violet-600 font-semibold hover:bg-violet-600 hover:text-white ease-in-out duration-500 flex items-center space-x-3 mx-auto md:w-[10vw] md:px-10 md:ml-60 md:mx-0"
        >
          Submit
        </button>
      </form>
    </>
  );
}
