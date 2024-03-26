'use client'
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";


const PopUp = ({ openPopUp, closePopUp }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();


  if (openPopUp !== true) return null;
  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    } else if (e.target.id === "HiddenPopUp") {
      closePopUp();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_l9cpubh";
    const templateId = "template_j4hm3up";
    const publicKey = "Lsky549BE--cu8XwM";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Raihan",
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent succesfully!", response);
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error("error sending email:", error);
      });
  };
  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-1 bg-black flex  m-auto rounded-3xl bg-opacity-5 justify-center items-center z-20"
    >
      <div className=" lg:w-2/6 lg:h-4/12 xxs:w-5/6 xxs:h-[450px] bg-white justify-center items-center inset-1 m-auto px-10 py-10 rounded-3xl relative">
        <h1 className="text-center font-mono text-3xl font-bold pb-10">
          Form Pembelian Coursera Plus
        </h1>
        <div className="text-black text-2xl hover:text-[26px] hover:text-blue-500 cursor-pointer text-right absolute top-2 right-4">
          <IoMdClose className="" id="HiddenPopUp" />
        </div>
        <div>
          <form action="" onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="name"
                type="text"
                name={name}
                value={name}
                placeholder="Raihan Rahmadian"
                onChange={(e) => setName(e.target.value)}
              />
             <p className="text-xs text-start">*Nama untuk sertifikat</p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                id="email"
                type="email"
                name="email"
                placeholder="rahmadianraihan@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}          
              />
              <p className="text-xs text-start">*email untuk daftar coursera</p>
            </div>
            <button
              id="pay-button"
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span className="relative text-white">Subscribe Now!</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
