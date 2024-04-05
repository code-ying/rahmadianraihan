"use client";
import { navbar } from "@/assets/data";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed w-10/12 m-auto z-50 flex">
      <div className="flex m-auto py-5 ">
        <div className="gap-3 bg-[#2E2E2E] text-white font-plusjakarta py-2 px-4 rounded-full xxs:hidden md:flex border-zinc-400">
          {navbar.map((data) => {
            return (
              <Link
                key={data.id}
                className="list-none items-center"
                href={data.path}
                to={data.path}
              >
                {data.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className="items-left flex p-5 text-2xl lg:hidden xs:flex sm:flex md:hidden  duration-500 font-bold cursor-pointer text-white z-50 w-full h-full"
        onClick={handleNav}
      >
        <button className="bg-[#2E2E2E] py-2 px-1 w-[125px]  flex justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent text-white active:border-white duration-300 active:text-black ">
          Menu
          {!isOpen ? (
            <AiOutlineCaretDown className="h-8" />
          ) : (
            <AiOutlineCaretUp className="h-8" />
          )}
        </button>
          <div
            onClick={handleNav}
            className={
              isOpen
                ? "overflow-y-hidden lg:hidden ease-in duration-300 absolute text-white  w-full  top-0 bg-black/40 h-screen py-20 flex flex-col z-50 cursor-default"
                : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
            }
          >
            <div className="">
              {navbar.map((item) => {
              return (
                <Link href={item.path} key={item.id}>
                  <div className="bg-[#2e2e2e] py-2 w-5/6 px-5 overflow-y-hidden">
                    <li className="list-none  hover:bg-white/20 text-xl py-4">
                    {item.name}
                  </li>
                  </div>
                  
                </Link>
              );
            })}
            </div>
            
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
