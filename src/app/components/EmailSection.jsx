"use client";
import React, { useEffect, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from '../lib/sendEmail'

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [canSend, setCanSend] = useState(false);
 
  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text.target.value) === false) {
      console.log("Email is Not Correct");
      setEmail(text.target.value);
      setCanSend(false);
    } else {
      console.log("Email is Correct");
      setEmail(text.target.value);
      setCanSend(true);
    }
  };

  const fieldsValidated = () => {
    if (name === "" || email === "" || message === "") {
      alert("Fill in all fields");
      return false;
    } else {
      return true;
    }
  };

  const handleEmail = (e) => {
    e.preventDefault();

    if (fieldsValidated) {
      if (canSend) {
        sendEmail(name, email, message);
        resetFields()
      } else {
        alert("Invalid Email");
      }
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/DaniloDev" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/danilo-nascimento-dev" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleEmail}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@email.com"
              onChange={(e) => validateEmail(e)}
              value={email}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
