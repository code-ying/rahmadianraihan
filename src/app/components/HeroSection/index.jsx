"use client";
import hero from "@/assets/images/hero.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
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
          Hi, I am Muhammad Raihan Rahmadian, also known as Tuying. a front-end
          developer from Indonesia based in West java. I am an Javascript addict
          with it's various framework to craft prodigious and user-friendly
          interfaces. Beside that, I am social sciences graduate from Diponegoto
          University.
        </p>
      </div>
      <div className="flex pt-5 text-4xl gap-5 ">
        <FaSquareXTwitter
          className="hover:text-black text-white"
          onClick={() => newTab("https://twitter.com/investekor")}
        />

        <FaLinkedin
          className="hover:text-[#0077b5] text-white"
          onClick={() =>
            newTab(
              "https://www.linkedin.com/in/muhammad-raihan-rahmadian-a74564216/"
            )
          }
        />

        <FaGithub
          className="hover:text-[#24292E] text-white"
          onClick={() => newTab("https://github.com/code-ying")}
        />
      </div>

      <div className="pt-10">
        <Link
          to="contactform"
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
        >
          <button
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Contact Me
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
