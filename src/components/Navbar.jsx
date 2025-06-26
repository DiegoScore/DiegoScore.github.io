import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import MenuBar from './navbar/MenuBar';
import { navigationData } from '../data';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#3b7ad1]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href=""
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src="/Logo.webp"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            DCM
          </span>
        </a>

        <div className="hidden w-[400px] h-full sm:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[#7042f861]  mr-[20px]  rounded-full text-gray-200">
            {navigationData.map((e, i) => (
              <Link
                key={i}
                className='cursor-pointer px-[20px] py-[10px] rounded-lg hover:text-gray-400 hover:bg-black/10 transition-colors duration-200'
                to={e.href}
                smooth={true}
                offset={-100}
                duration={200}
              >
                {e.name}
              </Link>
            ))}

          </div>
        </div>

        <div className='sm:hidden'>
          <MenuBar />
          {/* <DropDownExample /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar