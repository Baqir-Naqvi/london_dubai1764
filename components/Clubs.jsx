import React from "react";

function Clubs() {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20 bg-black "
      id="globalclubs"
    >
      <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white md:flex flex-grow">
        reciprocal <span className="text-[#c5a47e] ml-5">{"  "} clubs</span>
      </h2>

      <div className="grid md:grid-cols-4  mt-20 mx-30 gap-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className="  uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            LONDON
          </h2>

          <p className="text-white text-center opacity-90">
            <span
              onClick={() =>
                window.open("https://centuryclub.co.uk/", "_blank")
              }
              className="cursor-pointer"
            >
              {" "}
              Century Club
            </span>

            <br />
            <span
              onClick={() => window.open("https://www.hosb.org.uk/", "_blank")}
              className="cursor-pointer"
            >
              {" "}
              House of St Barnabas
            </span>
            <br />
            <span
              onClick={() =>
                window.open("https://www.winchesterhouseclub.com/", "_blank")
              }
              className="cursor-pointer"
            >
              {" "}
              The Winchester House Club
            </span>
            <br />
            <span
              onClick={() =>
                window.open("https://www.unionclub.co.uk/", "_blank")
              }
              className="cursor-pointer"
            >
              Union Club
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-top">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            singapore
          </h2>
          <p className="text-white text-center opacity-90">
            <span
              onClick={() => window.open("https://mandala.club/", "_blank")}
              className="cursor-pointer"
            >
              {" "}
              Mandala Club
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-top">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            budapest
          </h2>
          <p className="text-white text-center opacity-90">
            <span
              onClick={() => window.open("https://www.brody.house/", "_blank")}
              className="cursor-pointer"
            >
              {" "}
              Brody House
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-top">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            munich
          </h2>
          <p className="text-white text-center opacity-90">
            <span
              onClick={() => window.open("https://famtain.com/", "_blank")}
              className="cursor-pointer"
            >
              {" "}
              Famtain Club
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clubs;
