import React from 'react'
import {useState} from 'react'
function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit =async (e) => {
    e.preventDefault();
    await fetch("https://app.icontact.com/icp/core/mycontacts/signup/designer/form/?id=231&cid=1457909&lid=6633", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(formData),
    });
  };

    


  return (
    <div className="contact-us flex flex-col py-10 bg-black">
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

        {/* <div className="flex md:flex-row flex-col justify-center items-center md:w-[60%] "> */}
        <form
          className="flex md:flex-row flex-col justify-center items-center md:w-[60%]"
          id="icontactSignupFormWrapper231"
          // method="post"
          // name="icontactSignupForm"
          // acceptCharset="UTF-8"
          // action="https://app.icontact.com/icp/core/mycontacts/signup/designer/form/?id=231&cid=1457909&lid=6633"
        >
          <div className="h-full flex flex-col justify-top items-center">
            <div className="flex flex-row md:justify-end justify-center items-center flex-wrap mr-1">
              <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
              <input
                type="text"
                placeholder="Phone"
                onChange={handleChange}
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
              <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
              <input
                type="text"
                placeholder="Company"
                onChange={handleChange}
                className="md:w-[210px] w-[80%] px-2 rounded-[10px] m-1 h-[50px] bg-[#323232]  border-white text-white font-normal opacity-60"
              />
            </div>
          </div>

          <div className="flex flex-col md:w-max w-[80%]  md:items-end gap-5 md:mt-0 mt-2 md:justify-end justify-center">
            <input
              type="text"
              placeholder="Message"
              className="md:w-[350px] w-[100%] px-2 rounded-[10px] h-[110px] bg-[#323232]  border-white text-white font-normal opacity-60"
            />
            <button
              className="bg-[#c5a47e]  uppercase z-10 w-max md:py-2 md:px-5 py-2 rounded-full"
              onClick={handleFormSubmit}
            >
              <p className="z-10 md:text-[18px] text-[10px] px-[20px] font-[600] text-white md:tracking-widest">
                send
              </p>
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ContactUs