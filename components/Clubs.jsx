import React from 'react'

function Clubs() {
  return (
    <div
      className="flex flex-col items-center justify-center pt-20 bg-black "
      id="globalclubs"
    >
      <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white md:flex flex-grow">
        reciprocal <span className="text-[#c5a47e]">clubs</span>
      </h2>

      <div className="grid md:grid-cols-4  mt-20 mx-30 gap-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            LONDON
          </h2>
          <p className="text-white text-center opacity-60">
            House of St Barnabas
            <br /> www.hosb.org.uk <br />
            The Winchester House Club www.winchesterhouseclub.com
          </p>
        </div>

        <div className="flex flex-col items-center justify-top">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            singapore
          </h2>
          <p className="text-white text-center opacity-60">
            Mandala Club www.mandala.club
          </p>
        </div>

        <div className="flex flex-col items-center justify-top">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            budapest
          </h2>
          <p className="text-white text-center opacity-60">
            Brody House www.brody.house
          </p>
        </div>

        <div className="flex flex-col items-center justify-top">
          <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white my-[30px] ">
            munich
          </h2>
          <p className="text-white text-center opacity-60">
            Famtain Club www.famtain.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Clubs