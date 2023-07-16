import React from "react";
import Image from "next/image";
import hundredimg from "@/public/Images/onehundred.png";

function Membership() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2 className=" uppercase text-[35px] font-normal tracking-[8px] text-center text-white my-20 ">
        lifetime <span className="text-[#c5a47e]">membership</span>
      </h2>
      <button className="bg-[#c5a47e]  uppercase z-10 w-max p-5 rounded-[15px]">
        <p className="z-10 md:text-[20px] text-[12px] md:px-[20px] font-[600] text-white md:tracking-widest">
          click here to Immediately Mint a Lifetime Membership NFT
        </p>
      </button>
      <p className="text-[20px] text-white opacity-60 my-10">
        It's in your MetaMask wallet in seconds - give it a go
      </p>

      <div className="flex md:flex-row flex-col justify-center mt-[5rem] ">
        <div className="flex flex-col justify-start items-center">
          <h2 className=" uppercase text-[30px] font-normal tracking-[4px] text-white text-start">
            Over
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image src={hundredimg} alt="hundred" width={400} height={200} />
        </div>

        <div className="flex flex-col justify-end items-center ml-5">
          <h2 className=" uppercase text-[30px] font-normal tracking-[4px] text-center text-white ">
            Key Businesses
            <br /> Represented
          </h2>
        </div>
        <h1 className="text-[#c5a47e] md:flex hidden text-9xl font-bold  text-center absolute right-[10px] mt-[0px] opacity-10 ">
          represented
        </h1>
      </div>
      <p className="text-[18px] text-white opacity-60 my-10 pt-[50px] md:px-[20%] text-center">
        Appold, Alteri-Enigma, Greengage, InCryptoHub, JadeVault, Crypto A.M.,
        Blockdaemon, House of Block, CEX.IO, Coinbase, Coinpass.com, Kraken,
        Archax, Deribit, Swissborg, Finserv Experts, British Business Bank,
        Women in Blockchain Talks, Worldpay, MoonPay, Avalanche, Accubits,
        Aikon, Athena Labs, Minima, British Blockchain Association, Kudos,
        Circle, Meta, Netflix, Spotify, Suprafin, BBC, Napster, Matrixport,
        Eleven Management, Zebu, Flight3, Crypto Curry Club, British Blockchain
        Association, YC Capital, Ripple, Tezos, IBM, The Labz, Flare Network,
        Salesforce, Innerplace, Commerce Block, FTA Advisory, Showcode,
        Accubits, Citrix, Zscaler, Thales, Dream Factory, Deloitte, Ernst &
        Young, PKF Francis Clark, Accenture, CMS, Asprey, De Beers, Penningtons
        Manches Cooper LLP, diamonds4crypto, Diamond Ancestry, Pina Vida, Tutti,
        Qredo, Thomas Murray, Pillar Project, Etherspot, Novum Insights, Crypto
        Magazine, UK Parliament, UK Cabinet Office, National Health Service,
        Tracer DAO, Factory DAO, Finance.vote, Block.One, Animoca Brands,
        Cornucopia Capital, Cheeky Crypto, Crypto Gains, Crypto Banter, Ethereal
        Collective, Poundtoken, Kwiktrust, Eton Blockchain Society, Move
        Network, Bigfan, Nativz, Multiverse, Llamaverse, Bored Ape Yacht Club,
        CryptoPunks, Doodles, CyberKongz, Anti-Social Ape Club, Ethereum London,
        Trib3, Fanz.
      </p>
    </div>
  );
}

export default Membership;
