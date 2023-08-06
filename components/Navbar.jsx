import React from 'react'
import { useGlobalContext } from '@/utils/ContextProvider';


function Navbar() {
  const { setCity,city } = useGlobalContext();

  return (
    <div
      className="absolute flex-row justify-center items-center h-16 bg-transparent navbar_heading text-white   w-full z-50"
      role="navigation"
    >
      <ul className=" md:flex flex-row justify-center items-center md:h-16 text-white font-[100] tracking-[3px] text-[12px] w-full h-0 overflow-hidden">
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#"
          onClick={() => window.location.reload()}
        >
          HOME
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#ourstory"
        >
          OUR STORY
        </a>
        {city === "Dubai" && (
          <>
            <a
              className="hover:text-gray-300  hover:cursor-pointer p-4"
              href="#globe"
            >
              GOING GLOBE
            </a>
          </>
        )}
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#ourvision"
        >
          OUR VISION
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#faq"
        >
          FAQs
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#membership"
        >
          MEMBERSHIP
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#founders"
        >
          FOUNDERS
        </a>
        <a
          className="hover:text-gray-300 navbar_heading  hover:cursor-pointer p-4"
          href="#contact"
        >
          CONTACT
        </a>

        {/* <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#globalclubs"
        >
          GLOBAL CLUBS
        </a> */}
      </ul>
    </div>
  );
}

export default Navbar