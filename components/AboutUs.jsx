import React from "react";
import Image from "next/image";
import GalleryImage from "@/public/Images/gallery.png";

export default function () {
  return (
    <div className="flex flex-col items-center justify-center h-max bg-black mt-[50px]">
      <div>
        <h1 className="text-[#c5a47e] text-9xl font-bold tracking-widest text-center absolute left-[130px] mt-[120px] opacity-10">
          welcome
        </h1>
        <h2 className="text-[54px] font-normal tracking-widest text-center text-white">
          Welcome to <span className="text-[#c5a47e]">1764</span>
        </h2>
      </div>

      <div className="flex flex-row items-center justify-center pt-[120px] w-[1050px]">
        <div className="flex flex-col items-left justify-center w-max">
          <p className="text-[#FEFEFE] text-[42px] font-[500] absolute mb-[250px] leading-[0.75]">
            A modern twist to the traditional
            <br /> private members' club
          </p>

          <p className="text-[#FEFEFE] text-[22px] font-[400] opacity-70 w-[420px] mt-[80px]">
            As the proud Owner of Blacks Club, Soho, London (est. 1764) we are
            London’s premier Community Hub for Web3 & Tech Professionals &
            Enthusiasts with our First Satellite to Open in Dubai 2023.
          </p>
        </div>
        <Image width={776} height={401} src={GalleryImage} />
      </div>

      {/* Lower Section */}
      <div className="nasa-bg-image bg-cover bg-center w-full h-screen bg-image">
        <h2 className=" uppercase text-[35px] font-normal tracking-[10px] text-center text-white mt-20 ">
          Our<span className="text-[#c5a47e] ml-5">Story</span>
        </h2>
        <h1 className="text-[#c5a47e] text-9xl font-bold tracking-wider text-center absolute right-[50px] opacity-10 pt-20">
          our story
        </h1>
        <h1 className="text-white text-[42px] font-[500] text-center leading-[1] my-10">
          The UK's first venue dedicated to <br /> supporting the tech sector
        </h1>

        {/* text container */}
        <div className="px-[15rem]  items-center ">
          <p className="text-[22px] text-white opacity-60 text-center">
            In November 2021 we embarked on a mission to add a modern twist to
            the traditional private members' club, <br /> by launching the UK's
            first venue dedicated to supporting the tech sector, where founders,
            developers, investors, professionals and enthusiasts could network,
            collaborate and socialise around all things Blockchain, DeFi,
            Crypto, NFTs, Web3, AI & Tech.
          </p>

          <div className="flex flex-row items-center justify-center mt-10">
            <p className="text-[22px] text-white opacity-60 ">
              In May 2022 we purchased Blacks Club (www.blacksclub.com), which
              could not possibly be a more perfect flagship. This vibrant and
              historic private members’ club, located at 67 Dean Street in Soho,
              London, was formed to be the antithesis of the traditional London
              gentlemen’s clubs and is steeped in anti-establishment history.
            </p>

            <p className="text-[22px] text-white opacity-60 pl-[40px]">
              The home of Charles Fortnum (of Fortnum & Mason), <br />
              it’s where the first Supper Clubs were established (by Samuel
              Johnson, Joshua Reynolds & David Garrick) and was a hang-out of
              the suffragette movement in the 19th Century. Since 1764, it has
              always been a venue where innovators, contrarians, pioneers and
              disruptors assemble and has now firmly moved into the 21st Century
              with a new focus, affiliating those <br />
              involved in emerging technologies.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-white text-[42px] font-[500] text-center leading-[1] my-10">
              Inclusion is via the ownership of one of the club’s 3,500
              Membership NFTs, which bestow the possessor with lifetime
              membership of Blacks. By contrast to all other private members’
              clubs, membership is tradable and <br /> never represents a sunk
              cost.
            </h1>

            <button className="bg-[#c5a47e]  uppercase z-10 w-[355px] h-[57px] rounded-[30px]">
              <p className="z-10 text-[14px] tracking-wider font-[600] text-white">
                Enquire about membership
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
