import React from "react";
import Image from "next/image";
import hundredimg from "@/public/Images/onehundred.png";
import { useGlobalContext } from "@/utils/ContextProvider";
import { Parallax } from "react-scroll-parallax";

function Membership() {
  const { city } = useGlobalContext();
  return (
    <div
      className='flex flex-col justify-center items-center bg-black '
      id='membership'
    >
      <h2 className=' uppercase md:text-[35px] text-[24px] font-normal tracking-[8px] text-center text-white md:mt-20 mb-10 mt-5 '>
        lifetime <span className='text-[#c5a47e]'>membership</span>
      </h2>
      <button className='bg-[#c5a47e]  uppercase z-10 w-max md:py-5 md:px-5 py-5 rounded-[15px]'>
        <p className='z-10 md:text-[20px] text-[10px] md:px-[20px] font-[600] text-white px-[10px] md:tracking-widest'>
          click here to Immediately Mint a Lifetime Membership NFT
        </p>
      </button>
      <p className='md:text-[20px] text-[14px] text-white opacity-90 my-10'>
        It's in your MetaMask wallet in seconds - give it a go
      </p>

      <div className='flex md:flex-row flex-col justify-center md:mt-[5rem] mt-10 '>
        <div className='flex flex-col justify-start items-center'>
          <h2 className=' uppercase text-[30px] font-normal tracking-[4px] text-white text-start'>
            Over
          </h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <Image src={hundredimg} alt='hundred' width={400} height={200} />
        </div>

        <div className='flex flex-col justify-end items-center ml-5'>
          {city !== "Dubai" ? (
            <h2 className=' uppercase text-[30px] font-normal tracking-[4px] text-center text-white '>
              Key Businesses
              <br /> Represented
            </h2>
          ) : (
            <h2 className=' uppercase text-[30px] font-normal tracking-[1px] text-center text-white '>
              Key Businesses Represented <br />
              in london already
            </h2>
          )}
        </div>
        <Parallax translateY={-5} speed={-10}>
          <h2
            className='text-[#c5a47e] md:flex hidden md:text-[105px] font-bold  text-center absolute -right-[350px] mt-[0px] opacity-10
        
          '
          >
            represented
          </h2>
        </Parallax>
      </div>
      <p className='md:text-[18px] text-[14px] text-white opacity-90 my-10 md:pt-[50px] pt-[20px] md:px-[20%] md:text-center px-3'>
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
