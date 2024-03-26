'use client'
import Lottie from "lottie-react";
import animation2 from "@/assets/images/animation2.json";
import courseragif from "@/assets/images/coursera-hero.gif";
import hero2 from "@/assets/images/hero2.gif";
import courserahero from "@/assets/images/coursera-2.jpeg";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import PopUp from "@/app/components/PopUp";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CheckOut from "./CheckOut";

const Coursera = () => {
  

  return (
    <div>
      <div className="w-10/12 lg:py-20 2xl:px-20 xs:w-full  m-auto">
        
        <div className="z-20 relative pb-40">
          <div className="flex">
            <h1 className="text-white m-auto text-xl font-plusjakarta xxs:text-center">
              RAIHANRAHMADIAN.COM presents
            </h1>
          </div>
          <div className="">
            <h1 className="font-archivo font-bold  lg:text-6xl md:text-6xl text-5xl xxs:text-3xl font-kiw text-center pt-32 text-white">
              A Coursera Upgrade
            </h1>
          </div>
          <div className="w-full">
            <Lottie
              animationData={animation2}
              className="2xl:w-8/12 rounded-2xl m-auto"
            />
          </div>
          <div className="w-full">
            <h1 className="font-plusjakarta 2xl:text-3xl md:text-lg w-4/6 text-center m-auto text-gray-400">
              Upgrade your Coursera into Coursera Plus only 150k IDR/2 month multi devices
            </h1>{" "}
            <div className="text-center pt-5">
              <CheckOut />
            </div>
            <div className="">
              <div className="2xl:flex xl:flex lg:flex md:flex sm:flex  justify-evenly gap-10 w-5/6 m-auto pt-40 ">
                <Image
                  src={courseragif}
                  alt="courseragif"
                  className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-3/6 sm:w-3/6 xs:w-full xxs:w-full rounded-3xl 2xl:rotate-2 xl:rotate-2 lg:rotate-2 md:rotate-2 sm:rotate-2"
                />
                <div className="pt-10">
                  <h1 className="text-white font-kiw 2xl:text-6xl xl:text-5xl text-3xl sm:text-2xl xs:text-4xl  text-center m-auto 2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-full xxs:w-full xxs:text-4xl">
                    <span className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400 bg-clip-text text-transparent">
                      Invest
                    </span>{" "}
                    in your career{" "}
                  </h1>
                  <p className="text-gray-400 font-poppins 2xl:text-xl sm:text-sm pt-10 xxs:pt-5 xxs:text-center xs:text-xs items-center m-auto w-4/6">
                    Learn with Coursera Plus to chase your dreams
                  </p>
                </div>
              </div>
              <div className="flex-row-reverse 2xl:flex xl:flex lg:flex md:flex sm:flex justify-evenly gap-10 w-5/6 m-auto pt-20">
                <Image
                  src={hero2}
                  alt="hero"
                  className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-3/6 sm:w-3/6 xs:w-full xxs:w-full rounded-3xl"
                />
                <div className="m-auto">
                  <h1 className="text-white font-kiw 2xl:text-6xl xl:text-5xl text-3xl sm:text-2xl xs:text-xl text-center m-auto 2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-full xxs:w-full xxs:text-4xl">
                    <span className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Unlimited
                    </span>{" "}
                    resources
                  </h1>
                  <p className="text-gray-400 font-poppins 2xl:text-xl sm:text-sm pt-10 xxs:pt-5 xxs:text-center xs:text-xs items-center m-auto w-4/6">
                    With Coursera Plus can access to 7,000+ world-className
                    courses
                  </p>
                </div>
              </div>
              <div className="2xl:flex xl:flex lg:flex md:flex sm:flex justify-evenly gap-10 w-5/6 m-auto pt-20">
                <Image
                  src={courserahero}
                  alt="hero"
                  className="2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-3/6 sm:w-3/6 xs:w-full xxs:w-full rounded-3xl 2xl:-rotate-2 xl:-rotate-2 lg:-rotate-2 md:-rotate-2 sm:-rotate-2"
                />
                <div className="m-auto">
                  <h1 className="text-white font-kiw 2x:text-6xl xl:text-5xl text-3xl sm:text-2xl xs:text-xl text-center m-auto 2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-full xxs:w-full xxs:text-4xl">
                    <span className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-400 via-gray-50 to-teal-300 bg-clip-text text-transparent">
                      Earn
                    </span>{" "}
                    certificates
                  </h1>
                  <p className="text-gray-400 font-poppins 2xl:text-xl sm:text-sm pt-10 xxs:pt-5 xxs:text-center xs:text-xs items-center m-auto w-4/6">
                    Get Specializations, and Professional Certificates taught by
                    top instructors from leading universities and companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m-auto bg-[#0E1459] py-10 rounded-3xl">
          <h1 className="text-center md:text-5xl xxs:text-3xl font-kiw text-white pb-5">
            Coursera Plus Subscription
          </h1>
          <p className="text-gray-400 font-poppins 2xl:text-xl w-8/12 m-auto text-center">
            Subcribe Coursera Plus subscriptions on raihanrahmadian.com,
            offering accessible payment options through various local banks. We
            assure and guarantee accessibility to ChatGPT Plus accounts.
          </p>
          <div className="md:grid md:grid-cols-4  lg:w-5/6 md:w-full xxs:w-5/6 m-auto pt-16">
            <div className=" md:w-5/6 p-[2px] rounded-xl m-auto h-[300px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400">
              <div className="bg-black w-full h-full rounded-xl px-3 py-7">
                <div className="flex text-white items-center gap-2">
                  <IoPhonePortraitOutline className="text-5xl" />
                  <h1 className="lg:text-2xl font-kiw bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Flexible learning
                  </h1>
                </div>
                <p className="text-gray-400 text-xl px-2 pt-5 font-poppins md:text-sm xxs sm:text-sm">
                  Learn at your own pace, move between multiple courses, or
                  switch to a different course
                </p>
              </div>
            </div>
            <div className=" md:w-5/6  p-[2px] rounded-xl m-auto h-[300px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400">
              <div className="bg-black w-full h-full rounded-xl px-3 py-7">
                <div className="flex  text-white items-center gap-2">
                  <FaMoneyBillTransfer className="text-5xl" />
                  <h1 className="lg:text-2xl font-kiw bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Easy Payment
                  </h1>
                </div>
                <p className="text-gray-400 text-xl px-2 pt-5 font-poppins md:text-sm sm:text-sm">
                  We provide easy payment method with various local bank
                  accounts, powered by Xendit.
                </p>
              </div>
            </div>
            <div className=" md:w-5/6 p-[2px] rounded-xl m-auto h-[300px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400">
              <div className="bg-black w-full h-full rounded-xl px-3 py-7">
                <div className="flex text-white items-center gap-2">
                  <LiaCertificateSolid className="text-5xl" />
                  <h1 className="lg:text-2xl md:text-xl font-kiw bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Unlimited certificates
                  </h1>
                </div>
                <p className="text-gray-400 text-xl px-2 pt-5 font-poppins md:text-sm sm:text-sm">
                  Earn a certificate for every learning program that you
                  complete at no additional cost
                </p>
              </div>
            </div>
            <div className=" md:w-5/6 p-[2px] rounded-xl m-auto h-[300px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 via-rose-400 to-lime-400">
              <div className="bg-black w-full h-full rounded-xl px-3 py-7">
                <div className="flex text-white items-center gap-2">
                  <AiTwotoneThunderbolt className="text-5xl " />
                  <h1 className="text-2xl font-kiw bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Instant Access
                  </h1>
                </div>
                <p className="text-gray-400 text-xl px-2 pt-5 font-poppins md:text-sm sm:text-sm">
                  You will get Coursera Plus with your own account instantly via
                  email after completing the payment
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-60 xxs:py-32 text-center">
          <div className="z-10 relative">
            <h1 className="lg:text-7xl xxs:text-5xl font-archivo font-bold text-white">
              The next level of Education
            </h1>
            <p className="font-plusjakarta text-3xl w-4/6 text-center m-auto text-gray-400 pt-10">
              Upgrade your ChatGPT into ChatGPT Plus only 150k IDR/2 month multi
              devices
            </p>
            <div className="text-center pt-8">
              <CheckOut />
            </div>
            <div className="pt-8">
              <h1 className="font-plusjakarta text-sm bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                RAIHANRAHMADIAN.COM
              </h1>
            </div>
          </div>
        </div>
        <PopUp />
      </div>
    </div>
  );
};

export default Coursera;
