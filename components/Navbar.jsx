import React from 'react'

function Navbar() {
  return (
    <div
      className="absolute flex-row justify-center items-center h-16 bg-transparent text-white  font-mono w-full z-30"
      role="navigation"
    >
        <ul className="md:flex flex-row justify-center items-center md:h-16 text-white  font-mono w-full h-0 overflow-hidden">
            <li className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">ABOUT</li>
            <li className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">OUT STORY</li>
            <li className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">MEMBERSHIP</li>
            <li className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">GLOBAL CLUBS</li>
            <li className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">FAQ</li>
            <li className="hover:text-gray-300 hover:font-bold hover:cursor-pointer p-4">FOUNDERS</li>
          
        </ul>

    </div>
  );
}

export default Navbar