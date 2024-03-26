'use client'
import { portofolio } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <div className="text-white pt-40  w-11/12 m-auto font-poppins pb-40">
      <div className="pb-20">
        <h1 className="text-5xl font-bold">Layouts i've been created</h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 pb-40">
        {portofolio.map((item) => {
          return (
              <div className="sm:w-10/12  px-3 py-3 rounded-xl hover:bg-white/5 cursor-pointer ease-in m-auto duration-200" onClick={() => newTab(`${item.link}`)}>
                <div className="">
                  <Image
                    src={item.image}
                    alt=""
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <div className="py-2 ">
                    <p className=" text-sm px-1 py-1 bg-[#2e2e2e] w-12 text-center rounded-lg text-zinc-400">
                      {item.year}
                    </p>
                  </div>
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="text-sm py-2 text-zinc-400 ">{item.desc}</p>
                  <p className="text-green-500 hover:text-zinc-400">View More</p>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
