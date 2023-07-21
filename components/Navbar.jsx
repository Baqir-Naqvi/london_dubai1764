import React from 'react'

function Navbar() {
  return (
    <div
      className="absolute flex-row justify-center items-center h-16 bg-transparent text-white  font-mono w-full z-30"
      role="navigation"
    >
        <ul className="md:flex flex-row justify-center items-center md:h-16 text-white  font-mono w-full h-0 overflow-hidden">
            <a className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">ABOUT</a>
            <a className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">OUR STORY</a>
            <a className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">MEMBERSHIP</a>
            <a className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">GLOBAL CLUBS</a>
            <a className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">FAQ</a>
            <a className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">FOUNDERS</a>
          
        </ul>

    </div>
  );
}

export default Navbar