"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsAppIcon from "../../../public/whatsapp-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Image from 'next/image'
import Link from 'next/link'


const socialsMedias = [
  {
    icon:GithubIcon,
    url: 'https://github.com/DaniloDev',
    title: "Github",
    alt: "Github Icon"
  },
  {
    icon:LinkedinIcon,
    url: 'https://www.linkedin.com/in/danilo-nascimento-dev',
    title: "Linkedin",
    alt: "Linkedin Icon"
  },
  {
    icon:WhatsAppIcon,
    url: 'https://api.whatsapp.com/send?phone=5571993577705&text=Hello,%20more%20information!',
    title: "WhatsApp",
    alt: "WhatsApp Icon"
  },
  {
    icon:InstagramIcon,
    url: 'https://www.instagram.com/danilo.nascim',
    title:'Instagram',
    alt: "Instagram Icon"
  }
  
];

const SocialsMediasSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {socialsMedias.map((social, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
           
              </h2>
              <Link href={social.url} target="_blank">
               <p className="text-[#ADB7BE] text-base"><Image src={social.icon} title={social.title}  width={60} height={60}  alt={social.alt} /></p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialsMediasSection;
