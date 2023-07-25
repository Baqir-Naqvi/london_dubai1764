import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useGlobalContext } from "@/utils/ContextProvider";
import { useMediaQuery } from "react-responsive";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});
const DynamicCarousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

function Member() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { city } = useGlobalContext();
  const [hover, setHover] = useState(false);
  const videourl= city==='Dubai'?"/Videos/Dubai_NFT.mp4":"/Videos/LondonNFT.mp4"
  const [dubaiurl, setDubaiurl] = useState("");
  const [video1, setVideo1] = useState(false);
  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);
  const dubai2 = "/Videos/Dubai_NFT_2.mp4";
  const dubai3 = "/Videos/Dubai_NFT_3.mp4";
  const [activeSlide, setActiveSlide] = useState(1);
  const [carouselSize, setCarouselSize] = useState(350);

  useEffect(() => {
    if (isMobile) {
      setCarouselSize(350);
    } else {
      setCarouselSize(700);
    }
  }, []);



  const slides = [
    {
      key: 1,
      content: (
        <div
          className="w-max z-50 hover:cursor-pointer"
          onMouseEnter={() => setVideo1(true)}
          onMouseLeave={() => setVideo1(false)}
          onClick={() => setActiveSlide(3)}
          onTouchStart={() => setActiveSlide(3)}
        >
          <DynamicReactPlayer
            url={videourl}
            width={carouselSize}
            height={carouselSize}
            playing={video1}
            loop={true}
            muted={true}
          />
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div
          className="w-max z-50 hover:cursor-pointer"
          onMouseEnter={() => setVideo2(true)}
          onMouseLeave={() => setVideo2(false)}
          onClick={() => setActiveSlide(1)}
          onTouchStart={() => setActiveSlide(1)}
        >
          <DynamicReactPlayer
            url={dubai2}
            width={carouselSize}
            height={carouselSize}
            playing={video2}
            loop={true}
            muted={true}
          />
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div
          className="w-max z-50 hover:cursor-pointer"
          onMouseEnter={() => setVideo3(true)}
          onMouseLeave={() => setVideo3(false)}
          onClick={() => setActiveSlide(2)}
          onTouchStart={() => setActiveSlide(2)}
        >
          <DynamicReactPlayer
            url={dubai3}
            width={carouselSize}
            height={carouselSize}
            playing={video3}
            loop={true}
            muted={true}
          />
        </div>
      ),
    },
  ];

  // if the div is in screen view then setHover(true) else setHover(false)
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setHover(true);
  //       } else {
  //         setHover(false);
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.5,
  //     }
  //   );
  //   observer.observe(document.querySelector("#member"));
  // }, []);


  return (
    <div className="flex bg-black flex-col justify-center items-center   ">
      <h2 className=" uppercase md:text-[35px] text-[24px] font-normal font-oswald tracking-[8px] text-center text-white my-20 ">
        become a <span className="text-[#c5a47e]">Member</span>
      </h2>
      <div
        id="member"
        className="flex flex-col justify-center items-center md:mt-10 w-max"
      >
        <div className="md:block hidden ">
          {city === "Dubai" && (
            <div
              className="flex flex-col justify-center items-center md:w-[1000px] h-[750px] mb-20"
            >
              <DynamicCarousel
                slides={slides}
                goToSlide={activeSlide}
                offsetRadius={2}
                showNavigation={false}
              />
            </div>
          )}
          {city === "London" && (
            < div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        
            >
            <DynamicReactPlayer
              url={videourl}
              width={700}
              height={700}
              playing={hover}
              loop={true}
              muted={true}
              />
              </div>
          )}
        </div>
        <div className="md:hidden block">
          {city === "Dubai" ? (
             <div
              className="flex flex-col justify-center items-center w-[390px] h-[500px] mb-10 text-center"
            >
              <DynamicCarousel
                slides={slides}
                goToSlide={activeSlide}
                offsetRadius={2}
                showNavigation={true}
              />
            </div>
          ) : (
            <div     onTouchStart={() => setHover(true)}
            onClick={() => setHover(true)}
            >
          <DynamicReactPlayer
            url={videourl}
            width={310}
            height={410}
            playing={hover}
            loop={true}
            muted={true}
          />
          </div>
          )}
        </div>
      </div>

      {!city === "Dubai" && (
        <h3 className="text-[30px] mt-5 mb-10 font-[600]">
          limited to <span className="text-[#c5a47e]">1000</span>
        </h3>
      )}
      {city !== "Dubai" ? (
        <p className="text-white text-center opacity-90 md:text-[22px] text-[14px] md:w-[800px] md:mt-4 w-full px-2">
          Your Diamond Lifetime Membership NFT provides<br/> lifetime membership of
          1764 Dubai. It’s your 21st<br/> Century membership card.
        </p>
      ) : (
        <p className="text-white text-center opacity-90 md:text-[22px] text-[14px] md:w-[800px]">
          Your Diamond Lifetime Membership NFT provides unlimited access to
          Blacks in Soho, London. It’s your 21st Century membership card. By
          contrast to all other private members’ clubs, which charge a
          considerable non-refundable joining fee, your membership is tradable
          and never represents a sunk cost.
        </p>
      )}
    </div>
  );
}

export default Member;
