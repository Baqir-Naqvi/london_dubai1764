import React from 'react'

function ContactUs() {
  return (
    <div className="contact-us flex flex-col my-10">
      <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white">
        get <span className="text-[#c5a47e]">in touch</span>
      </h2>

      {/* create two cols grid */}

      <div className="flex md:flex-row flex-col md:w-[95%] md:mt-[100px] mt-[20px]">
        <div className="flex flex-col justify-top items-center md:w-[30%] ">
          <p className="text-white font-normal opacity-60">+44 800 123 4567</p>
          <p className="text-white font-normal opacity-60">+44 088 123 4567</p>
          <p className="text-white font-normal opacity-60">info@cc-gbl.io</p>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:w-[60%] ">
          <div className="h-full flex flex-col justify-top items-center">
            <div className="flex flex-row md:justify-end justify-center items-center flex-wrap mr-1">
              <input
                type="text"
                placeholder="Email"
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
              <input
                type="text"
                placeholder="Phone"
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
              <input
                type="text"
                placeholder="Email"
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
              <input
                type="text"
                placeholder="Phone"
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col  md:items-end gap-5 md:mt-0 mt-2 md:justify-end justify-center">
            <input
              type="text"
              placeholder="Name"
              className="w-[350px] px-2 rounded-[10px] h-[110px] bg-[#323232]  border-white text-white font-normal opacity-60"
            />
            <button className="bg-[#c5a47e]  uppercase z-10 w-max md:py-2 md:px-5 py-2 rounded-full">
              <p className="z-10 md:text-[18px] text-[10px] px-[20px] font-[600] text-white md:tracking-widest">
                send
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs