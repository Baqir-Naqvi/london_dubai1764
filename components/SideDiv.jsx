import React from 'react'
import InstaIcon from '@/public/Svgs/Instagram.svg'
import FbIcon from '@/public/Svgs/facebook.svg'
import BehaIcon from '@/public/Svgs/behance.svg'
import TwitterIcon from '@/public/Svgs/twitter.svg'
import Vertical from '@/public/Images/VerticalLine.png'
import Image from 'next/image'
function SideDiv() {
  return (
    <div className="absolute left-0 top-[160px] w-[190px] h-[680px] bg-black ">
      <div
        className="absolute text-center w-max bottom-[10px] left-10 px-8 flex-col flex h-[300px] 
      justify-evenly
      "
      >
        <p className="transform -rotate-90 origin-left uppercase text-[10px] text-white font-[600] tracking-[10px] ">
          1764 by blacks, london
        </p>

        <Image width={2} height={10} src={Vertical} />
        <Image width={20} height={10} src={InstaIcon} className="-ml-2" />
        <Image width={20} height={10} src={TwitterIcon} className="-ml-2" />
        <Image width={20} height={10} src={BehaIcon} className="-ml-2" />
        <Image width={10} height={10} src={FbIcon} className="-ml-2" />
      </div>
    </div>
  );
}

export default SideDiv