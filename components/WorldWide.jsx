import React, { useState, useEffect } from "react";
import Image from "next/image";
import Ellipse from "@/public/Images/Ellipse.png";
import Active from "@/public/Images/Active.png";
import { useGlobalContext } from "@/utils/ContextProvider";
import { useMediaQuery } from "react-responsive";
import { Parallax } from "react-scroll-parallax";
import Aos from "aos";

const DUBAI_QUESTIONS = [
  {
    q: "Why is this needed?",
    a: "Before we purchased Blacks in London and proved the model, there were no such clubs around the world dedicated to the space, let alone a global network of them. We strongly feel that the deep tech & disruptive innovation communities both need and deserve permanent venues, especially in Dubai. Our aim is to create a worldwide community of physical and virtual venues, where enthusiasts who share an interest in the space can socialise and network, meet like-minded individuals, engage and present, offer collaborations, get funded, become educated, provide instruction and guidance and share valuable information and knowledge. Its virtual and physical spaces offer the ideal environment and opportunity for members to interact face-to-face, to share their ideas and work together on future projects, creating entities greater than the sum of their parts.",
  },
  {
    q: "Why should I buy an NFT?",
    a: "Originated by us ahead of anyone globally, it’s your 21st Century membership card. It represents access to the respective physical clubhouse for as long as you own it. By contrast to all other private members’ clubs, which charge a considerable non-refundable joining fee, your membership is tradable and never represents a sunk cost. The need for speed is proven by history: we purchased our first venue, Blacks Club, in London, in May 2023, which has fast become the UK’s vibrant Web3 central hub. Founder memberships sold out instantly. We are close to securing a suitable venue, have attracted investment capital and are engaged with local community Web3 groups, all of whom see the need for what we are soon to deliver. As with London, we very much look forward to providing an all-encompassing venue, which will act as Dubai’s Web3 social and commercial hub.",
  },
  {
    q: "How many NFTs are in the collection? ",
    a: "There are approximately 5,000 NFTs per clubhouse, depending on venue size. This represents the typical membership for private members clubs, which are usually oversubscribed, with a long waiting list. It is important to us to ensure we have enough members to add real value to the community, without having so many that the exclusivity of being a member is diluted. Once memberships are sold out, the only way to become a member is to purchase one on the secondary market, whenever any become available. We expect interest in Dubai to be strong.",
  },
  {
    q: "Where will the NFTs be listed? ",
    a: "As an Ethereum-based collection, London NFTs are listed on LooksRare & OpenSea, which are the largest NFT marketplaces, with arguably the easiest user interface to buy and sell. ",
  },
  {
    q: "How long will it take to open the clubhouse in Dubai? ",
    a: "We have been offered several fabulous prospective venues and are already in talks. We opened our London flagship club 7 months ahead of schedule. Our current plan is to open in Dubai in 2023, possibly as early as October. The venue will be spacious, elegant, have multiple elements and will be central, targeting 15-minutes distance from the Marina, Palm, JBR and Downtown. We will announce the venue soonest we have signed documents.",
  },
  {
    q: "How long will it take to open other clubhouses across the globe?",
    a: "Our current plan is to open in Dubai in 2023 and possibly also Stockholm and roll-out further, more quickly through 2024 and beyond.",
  },
  {
    q: "What are the main benefits of being a member of 1764 Dubai?",
    a: "To join a fraternity of the smartest minds and most successful business people in the space today. We have already witnessed multiple ventures launched, capital raised, folk recruited and collaborations achieved all within the confines of the London club, between people who might well have never otherwise met. A phenomenal amount of opportunities will exist within the club and its membership for personal/career development and business expansion.",
  },
  {
    q: "Will you accept payments for all services and membership in crypto?",
    a: `Yes. Blacks in London became the first private members’ club in the world to accept Bitcoin as payment. Dubai will accept a variety of tokens.`,
  },
  {
    q: "Who is behind the venture?",
    a: `A lot of significant people within the space (see list of London club members below) and within the sector, but primarily the following:

Jonathan Willis (London)
Co-Founder 1764 Dubai
+44 7703 166773
jonathan@1764.io
LinkedIn: linkedin.com/in/jonathan-willis-5591291b5

A serial entrepreneur, with a background in disruptive innovation, from publishing to property, film, theatre, visitor attractions and now clubs. Click on the LinkedIn profile for background.

Veselin Velkov (Dubai)
Co-Founder 1764 Dubai
+971 542 737 599
veselin@1764.ae

A younger version of the above, highly successful within the sector and enormously respected within the space.
`,
  },
  {
    q: "Is this a rug-pull?",
    a: "Unlikely. We have a huge history of delivery. Our projects always get accomplished, which is part of the satisfaction. But the primary satisfaction is in making new things happen. We’ve been originating and delivering for over 40 years. We dream (the idea of merging new-tech NFTs’ utility with old-school private members’ clubs), we identify gaps in the market (no web3 & tech home in either London or Dubai), we execute (creating a collection) and we deliver (buying Blacks in London, the perfect flagship home) and then we roll that out, the concept having been proven.",
  },
  {
    q: "A question for you?",
    a: "Not accepted. Our reputation is impeccable, as evidenced at Blacks in London, where if any bad apples accidentally slip through the net, they’re quietly spoken to and never appear again. 1764 Dubai is for genuine and legitimate, honourable, ethical and principled protagonists in the space, for which we will become renown.",
  },
];
const LONDON_QUESTIONS = [
  {
    q: "Why is this needed?",
    a: "Before we purchased Blacks and proved the model, there were no such clubs around the world dedicated to the space, let alone a global network of them. We strongly feel that the deep tech & disruptive innovation communities both need and deserve permanent venues. Our aim is to create a worldwide community of physical and virtual venues, where enthusiasts who share an interest in the space can socialise and network, meet like-minded individuals, engage and present, offer collaborations, get funded, become educated, provide instruction and guidance and share valuable information and knowledge. Its virtual and physical spaces offer the ideal environment and opportunity for members to interact face-to-face, to share their ideas and work together on future projects, creating entities greater than the sum of their parts.",
  },
  {
    q: "Why should I buy an NFT?",
    a: " Originated by us ahead of anyone globally, it’s your 21st Century membership card. It represents access to the respective physical clubhouse for as long as you own it. By contrast to all other private members’ clubs, which charge a considerable non-refundable joining fee, your membership is tradable and never represents a sunk cost.",
  },
  {
    q: "How many NFTs are in the collection? ",
    a: " There are approximately 5,000 NFTs per clubhouse, depending on venue size. This represents the typical membership for private members clubs, which are usually oversubscribed, with a long waiting list. It is important to us to ensure we have enough members to add real value to the community, without having so many that the exclusivity of being a member is diluted. Once memberships are sold out, the only way to become a member is to purchase one on the secondary market, whenever any become available. ",
  },
  {
    q: "Where are the NFTs listed? ",
    a: " As an Ethereum-based collection, London NFTs are listed on LooksRare & OpenSea, which are the largest NFT marketplaces, with arguably the easiest user interface to buy and sell. ",
  },
  {
    q: "How long will it take to open other clubhouses across the globe? ",
    a: " We opened our London flagship club, Blacks, in May 2022, which was 7 months ahead of schedule. Our current plan is to open in Dubai in 2023 and possibly also Stockholm and roll-out further, more quickly through 2024 and beyond.",
  },
  {
    q: "What are the main benefits of being a member of Blacks, Soho? ",
    a: " To join a fraternity of the smartest minds and most successful business people in the space today. We have already witnessed multiple ventures launched, capital raised, folk recruited and collaborations achieved all within the confines of the club, between people who might well have never otherwise met. A phenomenal amount of opportunities exist within the club and its membership for personal/career development and business expansion. ",
  },
  {
    q: "Do you accept payments for all services and membership in crypto? ",
    a: " Yes. Blacks Club became the first private members’ club in the world to accept Bitcoin as payment.",
  },
];

function WorldWide() {
  const [showDubai, setShowDubai] = useState(false);
  const [showLondon, setShowLondon] = useState(false);
  const [active, setActive] = useState(null);
  const [citySize, setCitySize] = useState(10);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    // use media query
    if (isMobile) {
      setCitySize(10);
    } else {
      setCitySize(20);
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { city } = useGlobalContext();

  const FAQtab = ({ question, index, answer }) => {
    return (
      <div className='h-max md:w-[800px]'>
        {" "}
        <div
          className={`h-[60px] md:w-[800px] my-2 hover:bg-[#c5a47e]  hover:cursor-pointer  hover:text-black border-[1px] border-[#c5a47e] rounded-[10px]
            flex justify-between items-center px-10
            ${index == active ? "text-black bg-[#c5a47e]" : "text-white"}
            `}
          onClick={() => {
            if (index == active) setActive(null);
            else setActive(index);
          }}
        >
          <h3 className=' md:text-[20px] text-[14px] font-normal'>
            {question}
          </h3>
          <h3 className=' md:text-[20px] text-[14px] font-normal'>
            {active == index ? "-" : "+"}
          </h3>
        </div>
        <div
          className={`md:text-[20px] text-[14px] font-normal text-white pl-10 opacity-90 py-10 overflow-hidden transition-all duration-500 ease-in-out
          
  ${active == index ? "h-max" : "hidden"}`}
        >
          {answer}
        </div>
      </div>
    );
  };
  return (
    <div className='pb-[50px] relative flex flex-col bg-black'>
      <Parallax translateY={-5} speed={-10}>
        <h2 className='text-[#c5a47e] md:flex hidden  md:text-[140px]  font-bold text-center absolute left-[10px]  opacity-10 '>
          venues
        </h2>
      </Parallax>
      <div className='flex flex-col justify-center items-center '>
        <h2 className='font-oswald uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white mt-10 md:mb-0 '>
          we are <span className='text-[#c5a47e]'>WorldWide</span>
        </h2>

        <div className='bg-world-map relative bg-center w-[90%] mt-0 '>
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={citySize}
            width={citySize}
            className='custom-shadow relative top-[40%] left-[27%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={citySize}
            width={citySize}
            className='custom-shadow relative top-[45%] left-[24%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={citySize}
            width={citySize}
            className='custom-shadow relative top-[35%] left-[43%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={citySize}
            width={citySize}
            className='custom-shadow relative top-[41%] left-[59%] hover:animate-pulse cursor-pointer'
          />
          <Image
            src={Ellipse}
            alt='Ellipse'
            height={citySize}
            width={citySize}
            className='custom-shadow absolute right-[23%] bottom-[32%] hover:animate-pulse cursor-pointer'
          />

          <div
            className={`absolute left-[42.8%] scale-[2] top-[12%] px-2 flex-col transition-all duration-500 pt-2  map-card flex justify-start p-1 ${
              showLondon ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className='mb-2'>
              <span className='capitalize font-medium text-sm tracking-wider text-black'>
                LONDON
              </span>
              <hr />
            </div>

            <span className='tracking-wider text-[.6rem] text-white'>
              67 Dean St London WID 4QH
            </span>
          </div>

          <Image
            onPointerEnter={() => setShowLondon(true)}
            onPointerLeave={() => setShowLondon(false)}
            onClick={() => {
              () => setShowLondon(true);
            }}
            src={Active}
            alt='Active'
            height={citySize}
            width={citySize}
            className='custom-shadow absolute left-[45%] top-[32%] hover:animate-pulse cursor-pointer'
          />

          <Image
            src={Ellipse}
            alt='Active'
            height={citySize}
            width={citySize}
            className='custom-shadow absolute left-[50.5%] top-[28%] hover:animate-pulse cursor-pointer'
          />

          <div
            className={`absolute right-[34.5%] scale-[2] top-[32%] transition-all duration-500  map-card flex justify-center p-1 ${
              showDubai ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className='capitalize text-sm font-medium tracking-wider text-black'>
              DUBAI
            </span>
          </div>

          <Image
            src={Active}
            alt='Active'
            height={citySize}
            width={citySize}
            onClick={() => {
              () => setShowDubai(true);
            }}
            onPointerEnter={() => setShowDubai(true)}
            onPointerLeave={() => setShowDubai(false)}
            className='custom-shadow absolute right-[37%] top-[53%] hover:animate-pulse cursor-pointer show-on-hover'
          />
        </div>
        <div className='-mt-24'>
          <div className='md:w-[1280px] flex flex-col justify-left items-left md:ml-[50px]  '>
            <h2 className='text-white md:text-[40px] text-[24px] font-[500]  leading-[1] px-1'>
              Our vision is to quickly scale the <br />
              concept by launching affiliate venues
            </h2>

            <div data-aos='fade-up'>
              <p className='md:text-[22px] text-[14px] text-white opacity-90 mt-10 px-1'>
                Venues which share the same ethos and are dedicated to the same
                sector in major cities across the globe, starting with Dubai and
                then adding Stockholm, Singapore, Miami, New York, Riyadh, Abu
                Dhabi, Qatar & Lisbon, with the ultimate aim to have physical
                clubs in every major city across the globe. Our proprietary
                token-gated platform bridges the geographical divide between
                each clubhouse and its associated membership, whilst providing
                an online/virtual membership option for those not located near
                to a physical venue. <br /> <br />
                In addition to providing permanent physical spaces for members
                to use for work & play, collaboration & networking, the club
                seeks to develop a host of innovative products and services to
                further support individuals, companies, communities, regulators
                and governments to drive disruptive technology forward
                collectively towards mass adoption.
              </p>
            </div>
          </div>

          <div className='flex flex-row w-full justify-content justify-end h-max '>
            <h2 className='text-white md:text-[40px] text-[24px] font-[500]  leading-[1] my-10 text-right md:mr-10'>
              Importantly, we promote inclusivity <br />
              instead of exclusivity
            </h2>
          </div>
        </div>
      </div>

      <div className=''>
        {" "}
        <Parallax translateY={-5} speed={-10}>
          <h2
            className='text-[#c5a47e] md:flex hidden  md:text-[140px]  font-bold absolute mt-[1em] right-[1em] opacity-10 h-max -z-10'
            id='faq'
          >
            faqs
          </h2>
        </Parallax>
        <div className='flex flex-col justify-center items-center  md:pt-10 z-100'>
          <h2 className='font-oswald uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white'>
            What you need to <span className='text-[#c5a47e]'>know</span>
          </h2>

          <div className='flex flex-col '>
            {city !== "Dubai"
              ? LONDON_QUESTIONS.map((que, index) => {
                  return (
                    <FAQtab
                      key={index}
                      answer={que.a}
                      question={que.q}
                      index={index}
                    />
                  );
                })
              : DUBAI_QUESTIONS.map((que, index) => {
                  return (
                    <FAQtab
                      key={index}
                      answer={que.a}
                      question={que.q}
                      index={index}
                    />
                  );
                })}
          </div>

          <div className='flex md:flex-row flex-col justify-evenly items-center md:mt-[10rem] mt-10 bg-[#c5a47e] w-full md:px-20 md:py-20 py-6'>
            <h1 className='text-black md:text-[80px] text-[30px] font-[700] md:w-[35%] leading-[1] text-end'>
              A question <br />
              for you<span className='text-white'>?</span>
            </h1>

            {city !== "Dubai" ? (
              <p className='md:text-[20px] text-[14px] font-[500] opacity-90 text-black md:w-[35%] md:leading-[1.2] leading-[10px] px-2'>
                Isn't this the club that you wanted to exist and to which you
                always dreamed of being a member? Act now, before the club's
                full. Otherwise, there'll still always be space for you, but
                you'll have to wait until a membership NFT appears on the
                secondary market, for which, perhaps, you will have to pay a
                considerable premium (our Founder memberships, which quickly
                sold out, have traded for as much as an 18x multiple.)
              </p>
            ) : (
              <p className='md:text-[20px] text-[14px] font-[500] opacity-90 text-black md:leading-[1.2] leading-5 md:w-[35%]  px-2'>
                Isn't this the club that you’ve wanted to exist in Dubai and to
                which you always dreamed of being a member? Act now, before the
                club's full. Otherwise, there'll still always be space for you,
                but you'll have to wait until a membership NFT appears on the
                secondary market, for which you perhaps will have to pay a
                considerable premium (our London Founder memberships, which
                quickly sold out, have traded for as much as an 18x multiple.)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldWide;
