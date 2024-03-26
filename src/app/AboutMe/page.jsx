"use client";
import aboutme from "@/assets/images/1.png";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import hero from "@/assets/images/hero.png";

const AboutMe = () => {
  const newTab = (url) => {
    window.open(url);
  };

  return (
    <div className="">
      <div className="text-white  py-40 lg:flex lg:flex-row-reverse lg:justify-evenly lg:px-20 px-5 gap-28">
        <div>
          <Image
            src={aboutme}
            width={500}
            height={300}
            className="rounded-xl rotate-3"
          />
          <div className="flex gap-5 text-3xl pt-10 text-gray-400">
            <FaGithub
              onClick={() => newTab("https://github.com/code-ying")}
              className="hover:text-[31px] hover:text-blue-500 ease-in duration-300 cursor-pointer"
            />
            <FaLinkedin
              onClick={() =>
                newTab(
                  "https://www.linkedin.com/in/muhammad-raihan-rahmadian-a74564216/"
                )
              }
              className="hover:text-[31px] hover:text-blue-500 ease-in duration-300 cursor-pointer"
            />
            <FaXTwitter
              onClick={() => newTab("https://twitter.com/investekor")}
              className="hover:text-[31px] hover:text-blue-500 ease-in duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="lg:w-3/6 xxs:pt-10">
        <div className="pb-5">
          <Image src={hero} width={75} height={75} className="rounded-full" />
        </div>
          <h1 className="lg:text-4xl text-2xl font-archivo font-bold">
            I'm Raihan-Yingman, from West Java, the place where i build the
            dreams
          </h1>
          <div className="py-10">
            <h1 className="pb-5 text-2xl font-poppins">Who is 'Yingman'?</h1>
            <p className=" text-gray-400">
              My real name is Muhammad Raiihan Rahmadian. i've a lot of
              nicknames in different time phases, when i was 10, my nickname was
              a 'cow', at 17-now, i've an unique nickname, that is 'tuying'. And
              now i eventually added the word Man and make it as 'Yingman'.{" "}
            </p>
          </div>
          <div className="py-10">
            <h1 className="pb-5 text-2xl font-poppins">Raihan in Depth</h1>
            <div className=" text-gray-400">
              <p>
                I am actually a person who loves to explore in variety of
                interests and share my discoveries and experience through social
                media.
              </p>
              <p className="pt-5">
                I am currently exploring the world of software engineer and my
                proficiency is on Front-end developer's role. I also enjoy for
                creating the prodigious design for User Interfaces through
                Figma.
              </p>
              <p className="pt-5">
                My Curiousity with the world of technology occurred when I was
                in junior high school. I started seriously delving into the
                technology industry since 2023. It began with the uncertainty i
                felt after my graduation from International Relation's study at
                Diponegoro University. Therefore i started learning programming
                language such as javascript, typescript, and python. For the
                next level, i am ready to anchor my self to be software
                engineer.
              </p>
              <p className="pt-5">
                And now, after my graduation from social sciences student, I am
                still looking for a job as software engineer with the skill i
                have mastered at.
              </p>
            </div>
          </div>
          <div className="py-10">
            <h1 className="pb-5 text-2xl font-poppins">
              What is your motivation
            </h1>
            <div className="text-gray-400 italic">
              <p className="pb-10">
                I aim to live a life that surpasses mere survival, committing
                myself to being of service and bringing value to others.
              </p>
              <div className=" pl-5">
                <p className="border-l pl-5">
                  "Life's most persistent and urgent question is, 'What are you
                  doing for others?" - Martin Luther King Jr.
                </p>
              </div>
              <div className="pt-5 pl-5">
                <p className=" border-l pl-5">
                  "The strong person is not the one who can wrestle someone else
                  down. The strong person is the one who can control himself
                  when he is angry." - Muhammad SAW
                </p>
              </div>
              <div className="pt-5 pl-5">
                <p className="border-l pl-5">
                  "And Allah is the best of planners." - Quran 8:30
                </p>
              </div>
              <div className="pt-5 pl-5">
                <p className="border-l pl-5">
                  "A man's true wealth is the good he does in this world." -
                  Muhammad SAW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
