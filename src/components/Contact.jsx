import React from 'react'
import Style from '../utils/CSS/Contact.module.css'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={`${Style.card} rounded-xl after:bg-[#3a8bd7] before:bg-[#3a8bd7] hover:shadow-md hover:shadow-white/10 bg-[#347bbe] h-[50px] w-[200px] overflow-hidden flex items-center justify-center relative`}>
      <span className='font-normal text-lg'>Contáctame</span>
      <a className={Style.socialLink} target="_blank" href="https://github.com/DiegoScore">
        <FaGithub />
      </a>
      <a className={Style.socialLink} target="_blank" href="mailto:diego.campillay.m@gmail.com">
        <SiGmail />
      </a>
      <a className={Style.socialLink} target="_blank" href="https://www.linkedin.com/in/diego-leonardo-campillay-manriquez-4b5096234">
        <FaLinkedin />
      </a>
    </div>
  )
}

export default Contact