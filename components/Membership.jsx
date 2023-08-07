import React from "react";
import Image from "next/image";
import hundredimg from "@/public/Images/onehundred.png";
import { useGlobalContext } from "@/utils/ContextProvider";
import { Parallax } from "react-scroll-parallax";
import DiamondNFT from "@/public/Images/DiamondNFT.png";
import FounderNFT from "@/public/Images/FounderNFT.png";
import AmbassadorNFT from "@/public/Images/AmbassadorNFT.png";

function Membership() {
  const { city } = useGlobalContext();
  const DiamondBenefits = [
    "Lifetime Membership Diamond NFT",
    "Speedy Boarding Alpha",
    "Auto-Join In-House Trading Profits Group",
    "Whale Tank Start-Up Incubator Investor Opportunities",
    "20x Day-Pass Gift Vouchers pa",
    "10x Global Day-Pass Gift Vouchers pa",
    "Podcast Studio Access",
    "Annual Awards Festival Invitation",
    "Yacht DAO Crew + Yacht Rental Discounts",
    "One Night In Blacks the movie, participant",
    "Exclusive Artisan Enamel Diamond Club Badge",
    "Free Promotion in Club Directory (by approval)",
  ];
  const FounderBenefits = [
    "Lifetime Membership Founder NFT",
    "Business Class Alpha",
    "Auto-Join In-House Trading Profits Group",
    "Intro to In-House Ten-X pa Group",
    "Whale Tank Start-Up Incubator Investor & Participant",
    "40x Day-Pass Gift Vouchers pa",
    "20x Global Day-Pass Gift Vouchers pa",
    "Podcast Studio Priority",
    "Annual Awards Festival Priority",
    "Yacht DAO Captain + Yacht Rental Discounts",
    "Limited Edition Artisan Enamel Founder Club Badge",
    "Listed on Club’s Hall of Fame Wall (with logo)",
    "Free Promotion in Club Directory (by approval)",
  ];

  const AmbassadorBenefits = [
    "Lifetime Membership Ambassador NFT",
    "Priority Alpha",
    "Club Advisory Committee Role",
    "Auto-Join In-House Trading Profits Group",
    "Auto-Join In-House Ten-X pa Group",
    "Whale Tank Start-Up Incubator Panelist",
    "80x Day-Pass Gift Vouchers pa",
    "40x Global Day-Pass Gift Vouchers pa",
    "Podcast Studio Priority",
    "Annual Awards Festival Guarantee",
    "Yacht DAO Admiral + Yacht Rental Discounts",
    "One Night In Blacks the movie, featured role",
    "Priceless Artisan Enamel Ambassador Club Badge",
    "Listed on Club’s Hall of Fame Wall (with logo)",
    "Free Promotion in Club Directory (by approval)",
  ];

  // on call opens a new email window
  const handleEmail = (email) => {
    window.open(`mailto:${email}`);
  };

  const NFTBenefites = ({ imgsrc, title,benefits,stripelink,nftlink }) => {
    return (
      <div className="flex flex-col justify-top items-left bg-black ">
        <Image
          src={imgsrc}
          alt="Diamond NFT"
          width={350}
          height={300}
          className="w-full mt-0 border-[2px] border-[#c5a47e]"
        />
        <div className="flex flex-row justify-between w-full my-10">
          <button
            className="w-max py-3 px-8 bg-[#c5a47e] rounded-md"
            onClick={() => {
              window.open(stripelink);
            }}
          >
           DEBIT/CREDIT
          </button>

          <button className="w-max py-3 px-8 bg-[#c5a47e] rounded-md ">
            MINT
          </button>
        </div>

        <h2 className=" uppercase md:text-[24px] text-[18px] w-max font-normal  text-left text-[#c5a47e] ">
          {title}
        </h2>

        <ul className="flex flex-col  justify-center items-left text-white text-sm md:text-base font-normal md:mt-5 mb-5">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex flex-row text-[14px] md:text-[18px] leading-8 justify-start items-left 
              text-left
              "
            >
              <span className="text-[#c5a47e]">•</span> {benefit}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-black "
      id="membership"
    >
      <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white md:mt-20 mt-5 ">
        lifetime <span className="text-[#c5a47e]">membership</span>
      </h2>
      <h2 className="md:text-[24px] font-normal text-center text-white mb-10 my-5">
        {`
        ${
          city === "London"
            ? " Currently - £2,500 (incl. VAT)"
            : "Join 1764 Dubai Today"
        }
        `}

        {city === "Dubai" && (
          <>
            <div className="md:w-[70%] w-[90%] mx-auto">
              <h2 className="md:text-[24px] font-normal text-center text-white mb-10 leading-10">
                The Home of Digital Assets & Disruptive Innovation
                <br />
                There are three membership tiers from which to choose
              </h2>

              <p className="z-10 md:text-[22px]  text-[14px]  font-[400] text-white px-[10px] text-left">
                <span className="text-[#c5a47e]">Diamond </span>
                Memberships today are only $2,500, for earlybird adopters.
                Subscriptions may rise at any time, subject to dynamic pricing.
                See below for benefits. <br /> Annual membership fees will start
                at $2,000 pa (minus community discounts, couples etc - we’ll be
                in touch when this is due, with easipay monthly subscription
                options).
                <br /> This compares favourably with existing Dubai private
                member institutions, such as the Arts Club and the Capital Club.
                The Arts Club joining charge is $4,000, as a non-refundable sunk
                cost, with an annual membership fee of $4,000 (and an 18-month
                waiting list). The Capital Club’s joining charge is $13,000 with
                an annual fee of $5,500. <br />
                But with 1764 Dubai your joining fee is never a sunk cost; it is
                an investment that can be traded, since it is a utility NFT
              </p>

              <p className="z-10 md:text-[22px]  text-[14px]  font-[400] text-white px-[10px] text-left mt-5">
                <span className="text-[#c5a47e]">Founder </span>
                Memberships, with added benefits, today are only $5,000, for
                earlybird adopters. Subscriptions may rise at any time, subject
                to dynamic pricing. See below for benefits.
              </p>

              <p className="z-10 md:text-[22px]  text-[14px]  font-[400] text-white px-[10px] text-left mt-5">
                <span className="text-[#c5a47e]">Ambassador </span>
                Memberships, with VIP benefits, today are only $10,000, for
                earlybird adopters. Subscriptions may rise at any time, subject
                to dynamic pricing. See below for benefits. Once all memberships
                are sold, the only way to become a member will be to buy a
                membership NFT on the secondary market, with the value
                determined by demand. (Our London Founder NFTs have traded for
                as much as an 18x multiple.)
              </p>
            </div>

            <h2 className=" uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white md:mt-20 mt-5 ">
              <span className="text-[#c5a47e]">benefits</span>
            </h2>

            <div className="md:w-[90%] w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:mt-10 mt-5">
              <NFTBenefites
                imgsrc={DiamondNFT}
                benefits={DiamondBenefits}
                title="Diamond Member ($2,500)"
                stripelink="https://buy.stripe.com/eVa6qC3wp5tH6528xx"
              />

              <NFTBenefites
                imgsrc={FounderNFT}
                benefits={FounderBenefits}
                title="Founder Member ($5,000)"
                stripelink="https://buy.stripe.com/9AQbKWgjb09nali5lm"
              />

              <NFTBenefites
                imgsrc={AmbassadorNFT}
                benefits={AmbassadorBenefits}
                title="Ambassador Member ($10,000)"
                stripelink="https://buy.stripe.com/dR64iu4At4pDfFCdRT]"
              />
            </div>

            <h2 className="md:text-[24px] font-normal text-center text-white md:mt-10 md:leading-10">
              Discounted Early-Bird Introductory Prices, which may rise at any
              time, subject to dynamic pricing.
              <br />
              Annual Membership Fee $2,000 pa, or $2,200 pa paid monthly on
              subscription.
            </h2>
          </>
        )}
      </h2>
      {city === "London" && (
        <>
          <button className="bg-[#c5a47e]  uppercase z-10 w-max md:py-5 md:px-5 py-5 rounded-[15px]">
            <p className="z-10 md:text-[20px] text-[10px] md:px-[20px] font-[600] text-white px-[10px] md:tracking-widest">
              click here to Immediately Mint a Lifetime Membership NFT
            </p>
          </button>
          <p className="md:text-[20px] text-[14px] text-white opacity-90 my-10">
            It's in your MetaMask wallet in seconds - give it a go
          </p>
        </>
      )}
      {city === "London" ? (
        <>
          <div className="flex md:flex-row flex-col justify-center md:mt-4 mt-5">
            <p className="md:text-[20px] text-[14px] text-white text-center leading-10">
              To join by debit/credit card, use following link:
              <span className="flex flex-col justify-center items-center mt-8">
                <button
                  className="bg-[#c5a47e]  md:w-max w-[70%] uppercase z-10  md:px-5 py-2 rounded-[15px]"
                  onClick={() => {
                    window.open("https://buy.stripe.com/9AQ5my9UN1dr7969BE");
                  }}
                >
                  <p className="z-10 md:text-[20px]  text-[10px]  font-[400] text-white px-[10px] md:tracking-widest">
                    Join by Debit/Credit Card
                  </p>
                </button>
              </span>
              <br />
              To join by Payment Plan, Crypto or by Bank Transfer:
              <br /> Contact Victoria Morrison-Low on +44 7908 994946
            </p>
          </div>
          <span className="md:text-[20px] text-[14px] text-white leading-10">
            Email:{" "}
            <span
              className="text-[#c5a47e]
          hover:underline hover:cursor-pointer
          "
              onClick={() => handleEmail("victoria@blacksclub.com")}
            >
              victoria@blacksclub.com
            </span>
          </span>
        </>
      ) : (
        <>
          <div className="flex md:flex-row flex-col justify-center md:mt-4 mt-5">
            <span className="md:text-[20px] text-[14px] text-white text-center leading-10">
              <br />
              To join by Payment Plan, Crypto or by Bank Transfer:
              <br /> Contact: Ahmed on +971 50 868 4288
            </span>
          </div>
          <span className="md:text-[20px] text-[14px] text-white leading-10">
            Email:{" "}
            <span
              className="text-[#c5a47e]
          hover:underline hover:cursor-pointer
          "
              onClick={() => handleEmail("ahmed@1764.io")}
            >
              ahmed@1764.io
            </span>
          </span>
        </>
      )}

      <div className="flex md:flex-row md:justify-center flex-col justify-center md:mt-[5rem] mt-10 ">
        <div className="flex flex-col justify-start items-center">
          <h2 className=" uppercase text-[30px] font-normal tracking-[4px] text-white text-start">
            Over
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={hundredimg} alt="hundred" width={400} height={200} />
        </div>

        <div className="flex flex-col justify-end items-center ml-5">
          {city !== "Dubai" ? (
            <h2 className=" uppercase text-[30px] font-normal tracking-[4px] text-center text-white ">
              Key Businesses
              <br /> Represented
            </h2>
          ) : (
            <h2 className=" uppercase text-[30px] font-normal tracking-[1px] text-center text-white ">
              Key Businesses Represented <br />
              in london already
            </h2>
          )}
        </div>
        <Parallax translateY={-5} speed={-10}>
          <h2
            className={`text-[#c5a47e] md:flex hidden md:text-[105px] font-bold  text-center absolute 
            ${city === "Dubai" ? "  -left-[450px] " : "-right-[350px]"}
          
            mt-[0px] opacity-10`}
          >
            represented
          </h2>
        </Parallax>
      </div>
      <p className="md:text-[18px] text-[14px] text-white opacity-90 my-10 md:pt-[50px] pt-[20px] md:px-[20%] md:text-center px-3">
        TPX Property Exchanges, Revolut, ByBit, Appold, IDnow, Alteri-Enigma,
        Paiverse, OKX, Greengage, Labz, 3 Web Digital, WaveAccess, RarerThings,
        Seba Bank, InCryptoHub, JadeVault, Crypto A.M., Blockdaemon, House of
        Block, CEX, Excalibur FM, AI & Partners, Equiniti, Disintermediate,
        Nebula Alpha, Chainergy, Chainalysis, Coinbase, Coinpass, Coin Metrics,
        Aon, Push Entertainment, Millicent Labs, Neoswap AI, Stablecoin
        Standard, Zonaris, Blockdaemon, Kraken, Archax, Deribit, Swissborg,
        Finserv Experts, British Business Bank, Women in Blockchain Talks,
        Worldpay, MoonPay, Myna, Damex, AS Legal, Grant Thornton UK, coIR,
        Avalanche, Accubits, Penderyn Whisky, Aikon, Athena Labs, Minima,
        British Blockchain Association, Cudos, CLC & Partners, Zodia Custody,
        Circle, Meta, Netflix, Spotify, Suprafin, BBC, Napster, Matrixport,
        Eleven Management, Zebu, Flight3, Crypto Curry Club, British Blockchain
        Association, YC Capital, Ripple, Tezos, IBM, Flare Network, Salesforce,
        Innerplace, Commerce Block, Zilliqa, FTA Advisory, Showcode, Accubits,
        Citrix, Zscaler, Thales, Dream Factory, Deloitte, Ernst & Young,
        Accenture, CMS, Asprey, De Beers, Penningtons Manches Cooper LLP,
        diamonds4crypto, Diamond Ancestry, Pina Vida, Tutti, Stardom UK,
        Posterity Entertainment, Mary Shelley’s House of Frankenstein, The Ideas
        Factory, Ballabona Club, Marches Alternative Construction, Qredo, Thomas
        Murray, Pillar Project, Etherspot, Novum Insights, Crypto Magazine, UK
        Parliament, UK Cabinet Office, National Health Service, Tracer DAO,
        Factory DAO, Finance.vote, Animoca Brands, Cornucopia Capital, Cheeky
        Crypto, Crypto Gains, Crypto Banter, Ethereal Collective, Poundtoken,
        Kwiktrust, Eton Blockchain Society, Move Network, Bigfan, Nativz,
        Multiverse, Llamaverse, Bored Ape Yacht Club, CryptoPunks, Doodles,
        CyberKongz, Anti-Social Ape Club, Ethereum London, Trib3, Fanz.
      </p>
    </div>
  );
}

export default Membership;
