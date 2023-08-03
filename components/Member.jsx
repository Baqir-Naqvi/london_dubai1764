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
  const videourl =
    city === "Dubai" ? "/Videos/Dubai_NFT.mp4" : "/Videos/LondonNFT.mp4";
  const [dubaiurl, setDubaiurl] = useState("");
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);
  const dubai2 = "/Videos/Dubai_NFT_2.mp4";
  const dubai3 = "/Videos/Dubai_NFT_3.mp4";
  const [activeSlide, setActiveSlide] = useState(1);
  const [carouselSize, setCarouselSize] = useState(350);
  const [benefits, setBenefits] = useState("");
  const [tiermembership, setTiermembership] = useState("");

  useEffect(() => {
    if (isMobile) {
      setCarouselSize(350);
    } else {
      setCarouselSize(700);
    }
  }, []);

  useEffect(() => {
    if (activeSlide === 1) {
      setBenefits(`By recommendation link only, with VIP benefits, today are only
      $5,000, for earlybird adopters. Subscriptions may rise at any time, subject to dynamic
      pricing. See below for benefits.`);
      setTiermembership("Founder");
    } else if (activeSlide === 2) {
      setBenefits(`By referral link only, today are only $2,500, for earlybird adopters.
      Subscriptions may rise at any time, subject to dynamic pricing. See below for benefits.
      Annual membership fees will start at $2,000 pa (minus community discounts, couples etc -
      we’ll be in touch when this is due, with easipay monthly subscription options).
      This compares favourably with existing Dubai private member institutions, such as the Arts
      Club and the Capital Club. The Arts Club joining charge is $4,000, as a non-refundable
      sunk cost, with an annual membership fee of $4,000 (and an 18-month waiting list). The
      Capital Club’s joining charge is $13,000 with an annual fee of $5,500.
      But with 1764 Dubai your joining fee is never a sunk cost; it is an investment that can be
      traded, since it is a utility NFT.`);
      setTiermembership("Diamond");
    } else {
      setBenefits(`By invitation link only, today are only $10,000, for earlybird
adopters. Subscriptions may rise at any time, subject to dynamic pricing. See below for
benefits.`);
      setTiermembership("Ambassador");
    }
  }, [activeSlide]);

  const slides = [
    {
      key: 1,
      content: (
        <div
          className="w-max z-50 hover:cursor-pointer"
          // onMouseEnter={() => setVideo1(true)}
          // onMouseLeave={() => setVideo1(false)}
          onClick={() => {setActiveSlide(3) 
            setVideo1(true)
            setVideo2(false)
            setVideo3(false)
          }
          }
          onTouchStart={() => {setActiveSlide(3)
            setVideo1(true)
            setVideo2(false)
            setVideo3(false)
          }}
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
          // onMouseEnter={() => setVideo2(true)}
          // onMouseLeave={() => setVideo2(false)}
          onClick={() => {setActiveSlide(1)
          setVideo2(true)
          setVideo1(false)
          setVideo3(false)
          }}
          onTouchStart={() => {setActiveSlide(1)
          setVideo2(true)
          setVideo1(false)
          setVideo3(false)
        }}
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
          // onMouseEnter={() => setVideo3(true)}
          // onMouseLeave={() => setVideo3(false)}
          onClick={() => {setActiveSlide(2)
            setVideo3(true)
            setVideo1(false)
            setVideo2(false)
          }}
          onTouchStart={() => {setActiveSlide(2)
            setVideo3(true)
            setVideo1(false)
            setVideo2(false)}}
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

  return (
    <div className="flex bg-black flex-col justify-center items-center   ">
      <h2 className=" uppercase md:text-[35px] text-[24px] font-normal font-oswald tracking-[8px] text-center text-white my-20 ">
        become a <span className="text-[#c5a47e]">Member</span>
      </h2>
      <div
        id="member"
        className="flex flex-col justify-center items-center  w-max"
      >
        <div className="md:block hidden ">
          {city === "Dubai" && (
            <div className="flex flex-col justify-center items-center md:w-[1000px] h-[750px] mt-5">
              <DynamicCarousel
                slides={slides}
                goToSlide={activeSlide}
                offsetRadius={2}
                showNavigation={false}
              />
            </div>
          )}
          {city === "London" && (
            <div
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
            >
              <DynamicReactPlayer
                url={videourl}
                width={700}
                height={700}
                playing={true}
                loop={true}
                muted={true}
              />
            </div>
          )}
        </div>
        <div className="md:hidden block">
          {city === "Dubai" ? (
            <div className="flex flex-col justify-center items-center w-[390px] h-[500px] text-center">
              <DynamicCarousel
                slides={slides}
                goToSlide={activeSlide}
                offsetRadius={2}
                showNavigation={true}
              />
            </div>
          ) : (
            <div
              onTouchStart={() => setHover(true)}
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
          Your Diamond Membership NFT provides
          <br /> lifetime membership of Blacks Club. It’s your 21st
          <br /> Century membership card.
        </p>
      ) : (
        <>
          <h2 className="font-oswald uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white mt-10 md:mb-0 ">
            <span className="text-[#c5a47e]"> {tiermembership}</span> Membership
          </h2>
          <p className="text-white text-center opacity-90 md:text-[22px] text-[14px] md:w-[800px] md:mt-4 w-full px-2 mb-10">
            {benefits}
          </p>
        </>
      )}
    </div>
  );
}

export default Member;
