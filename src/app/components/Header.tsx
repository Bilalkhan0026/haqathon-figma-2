import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
const Header = () => {
  return (
    
    <div className="w-[1920px] h-[950px] py-[45px] px-[300px]">
      <nav className="w-[1320px] h-[87px]">
        <div className="w-[109px] h-[32px] ml-[605px] font-[700] text-[24px] leading-8 text-[#ffffff]">
          <span
            className="text-[#FF9F0D]
"
          >
            Food
          </span>
          tuck
        </div>
        <div className="flex justify-between items-center">
        <ul>
          <Link className="ml-[25px]" href="/">Home</Link>
          <Link className="ml-[25px]" href="/menu">Menu</Link>
          <Link className="ml-[25px]" href="/blog">Blog</Link>
          <Link className="ml-[25px]" href="/cheekout-page">Pages</Link>
          <Link className="ml-[25px]" href="/about">About</Link>
          <Link className="ml-[25px]" href="/shop">Shop </Link>
          <Link className="ml-[25px]" href="/sign-up">Contact </Link>
        </ul>
        <div className="w-[310px] h-[54px] flex justify-center items-center text-center bg-[#0d0d0d]">
          <div className="w-[310px] h-[54px] rounded-[27px] border-[1px] border-[#ff9f0d] flex justify-center items-center text-center bg-[#0d0d0d]">
            <input
              className="flex bg-[#0d0d0d]"
              type="text"
              placeholder="Search..."
            />
            <IoSearch />
          </div>
          <BsHandbag className="w-[24px] h-[24px] ml-[8px]" />
        </div>
        </div>
      </nav>
      <div className="flex">
      <div className="w-[472px] h-[356px] mt-[293px] pr-[300px]">
        <Image src="/i.png" alt="pic" width={249} height={40}></Image>
        <div className="w-[472px] h-[136px] mt-[18px] font-[700] text-[60px] leading-[68px] text-white">
          <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
        </div>
        <div className="w-[418px] h-[48px] mt-[22px] font-[400] text-[16px] leading-[24px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </div>
        <div className="">
          <div className="w-[190px] h-[60px] mt-[22px] rounded-[30px] broder- text-center flex justify-center items-cente bg-[#FF9F0D]">
            <a
              className="p-[17px] text-[#E0DFDF]
"
              href="/menu
              "
            >
              See Menu
            </a>
          </div>
        </div>
     
      </div>
        <Image className="ml-[98px] pt-[198px]" src="/Image.png" alt="pic" width={877.8} height={670}></Image>
      </div>
    </div>
  );
};

export default Header;
