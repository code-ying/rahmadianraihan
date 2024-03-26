"use client";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import { forwardRef } from "react";

const ContactForm = () => {
  const newTab = (url) => {
    window.open(url);
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_l9cpubh";
    const templateId = "template_j4hm3up";
    const publicKey = "Lsky549BE--cu8XwM";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Raihan",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent succesfully!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("error sending email:", error);
      });
  };
  return (
    <section className="w-full" id="contactform">
      <div className="bg- text-white xxs:pb-10">
        <h1 className="lg:text-7xl md:text-5xl xxs:text-4xl text-center py-10 font-kiw">
          Let's Work Together
        </h1>
        <div className="md:grid md:grid-cols-2">
          <div className="  font-poppins md:py-16 py-10 mx-auto md:w-4/6 xxs:w-5/6">
            <h1 className="md:text-4xl xxs:text-2xl">Contact Information</h1>
            <p className="text-start  font-poppins pt-5">
              Get in touch with me via the contact information below if you're
              interested in connecting, collaborating, or discussing potential
              partnerships with me:
            </p>
            <div className="md:pt-20 pt-5 md:text-xl font-poppins ">
              <div className="flex items-center mb-2 cursor-pointer hover:text-blue-700 ho ease-in duration-200">
                <IoMail className="lg:text-3xl mr-2" />
                <h1 className="md:hover:text-[21px] text-lg duration-150">
                  ramadianraihan@gmail.com
                </h1>
              </div>
              <div
                className="flex items-center mb-2 cursor-pointer hover:text-blue-700 ho ease-in duration-200"
                onClick={() =>
                  newTab(
                    "https://www.linkedin.com/in/muhammad-raihan-rahmadian-a74564216/"
                  )
                }
              >
                <FaLinkedin className="lg:text-3xl mr-2" />
                <h1 className="md:hover:text-[21px] text-lg duration-150">
                  Muhammad Raihan Rahmadian
                </h1>
              </div>
              <div
                className="flex items-center cursor-pointer  hover:text-blue-700 ho ease-in duration-200"
                onClick={() => newTab("https://github.com/code-ying")}
              >
                <FaGithub className="lg:text-3xl mr-2" />
                <h1 className="md:hover:text-[21px] text-lg duration-150">code-ying</h1>
              </div>
            </div>
          </div>

          <div className="py-8 lg:py-16 w-full px-4 mx-auto max-w-screen-md">
            <div className="flex items-center justify-center px-10 md:py-12">
              <div className="mx-auto w-full max-w-[550px]">
                <form onSubmit={sendEmail}>
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-white ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name={name}
                      id="name"
                      value={name}
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-white ">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-white ">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={subject}
                      placeholder="Enter your subject"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-3 block text-base font-medium text-white ">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      value={message}
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <button
                      href="#_"
                      className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                      type="submit"
                    >
                      <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                      <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                      </span>
                      <span className="relative text-white">Submit Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default forwardRef(ContactForm);
