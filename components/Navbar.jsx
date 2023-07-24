import React from 'react'

function Navbar() {
  return (
    <div
      className="absolute flex-row justify-center items-center h-16 bg-transparent navbar_heading text-white   w-full z-50"
      role="navigation"
    >
      <ul className=" md:flex flex-row justify-center items-center md:h-16 text-white   w-full h-0 overflow-hidden">
        <a
          className="hover:text-gray-300 navbar_heading  hover:cursor-pointer p-4"
          href="#about"
        >
          ABOUT
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#ourstory"
        >
          OUR STORY
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#membership"
        >
          MEMBERSHIP
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#globalclubs"
        >
          GLOBAL CLUBS
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="hover:text-gray-300  hover:cursor-pointer p-4"
          href="#founders"
        >
          FOUNDERS
        </a>
      </ul>
    </div>
  );
}

export default Navbar