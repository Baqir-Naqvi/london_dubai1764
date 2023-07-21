import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useGlobalContext } from "@/utils/ContextProvider";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

function Member() {
  const { city } = useGlobalContext();
  const [hover, setHover] = useState(false);
  const videourl= city==='Dubai'?"/Videos/Dubai_NFT.mp4":"/Videos/LondonNFT.mp4"
  const [dubaiurl, setDubaiurl] = useState("");

  // if the div is in screen view then setHover(true) else setHover(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHover(true);
        } else {
          setHover(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    observer.observe(document.querySelector("#member"));
  }, []);


  return (
    <div className="flex flex-col justify-center items-center   ">
      <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
        become a <span className="text-[#c5a47e]">Member</span>
      </h2>
      <div
      id="member"
        className="flex flex-col justify-center items-center mt-10 w-max"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="md:block hidden">
          <DynamicReactPlayer
            url={videourl}
            width={700}
            height={700}
            playing={true}
            loop={true}
            muted={true}
          />
        </div>
        <div className="md:hidden block">
          <DynamicReactPlayer
            url={videourl}
            width={390}
            height={700}
            playing={true}
            loop={true}
            muted={true}
          />
        </div>
      </div>

      {!city === "Dubai"&&<h3 className="text-[30px] mt-5 mb-10 font-[600]">
        limited to <span className="text-[#c5a47e]">1000</span>
      </h3>
}
      {city === "Dubai" ? (
        <p className="text-white text-center opacity-60 md:text-[22px] text-[14px] md:w-[800px] md:mt-4">
          Your Diamond Lifetime Membership NFT provides lifetime membership of 1764 Dubai. It’s your 21st Century membership card.
          </p>):(
      <p className="text-white text-center opacity-60 md:text-[22px] text-[14px] md:w-[800px]">
        Your Diamond Lifetime Membership NFT provides unlimited access to Blacks
        in Soho, London. It’s your 21st Century membership card. By contrast to
        all other private members’ clubs, which charge a considerable
        non-refundable joining fee, your membership is tradable and never
        represents a sunk cost.
      </p>
          )}
    </div>
  );
}

export default Member;
