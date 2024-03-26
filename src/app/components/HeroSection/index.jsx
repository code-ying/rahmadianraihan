"use client";
import hero from "@/assets/images/hero.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { Link } from "react-scroll";
const HeroSection = () => {
  const newTab = (url) => {
    window.open(url);
  };

  return (
    
      <div className=" py-40 w-10/12 m-auto font-kiw z-10">
        <div className="pb-5">
          <Image src={hero} width={75} height={75} className="rounded-full" />
        </div>
        <div className="lg:w-9/12 ">
          <h1 className="pb-5 font-bold text-white lg:text-4xl text-3xl ">
            A Front-end enginer and Dream Chaser from Indonesia
          </h1>
          <p className="font-poppins  text-gray-400 text-md">
            Hi, I am Muhammad Raihan Rahmadian, also known as Tuying. a
            front-end developer from Indonesia based in West java. I am an
            Javascript addict with it's various framework to craft prodigious
            and user-friendly interfaces. Beside that, I am social sciences
            graduate from Diponegoto University.
          </p>
        </div>
        <div className="flex pt-5 text-4xl gap-5 text-gray-300 ">
          <FaTwitter
            className="hover:text-white"
            onClick={() => newTab("https://twitter.com/investekor")}
          />

          <FaLinkedin
            className="hover:text-white"
            onClick={() =>
              newTab(
                "https://www.linkedin.com/in/muhammad-raihan-rahmadian-a74564216/"
              )
            }
          />

          <FaGithub
            className="hover:text-white"
            onClick={() => newTab("https://github.com/code-ying")}
          />
        </div>

        <div className="pt-10">
        <Link to="contactform"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}>
        <a
          href="#_"
          class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-gray-500 bg-white rounded-lg group"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span class="relative">Contact Me</span>
        </a>
      </Link>
        </div>
      </div>
    
  );
};

export default HeroSection;
