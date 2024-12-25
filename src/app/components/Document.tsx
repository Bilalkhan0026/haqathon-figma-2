import React from "react";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
const Doc = () => {
  return (
    <>
      <div className=" w-[1918px] h-[518px] my-[200px] bg-[url('/bg.png')]">
        <Image
          className="ml-[1150px] pt-[112px]"
          src="/Restaurant Active Process (1).png"
          alt="pic"
          width={273}
          height={40}
        ></Image>
        <div className="w-[705px] h-[60px] font-[700] text-[48px] leading-[56px] ml-[750px] mt-[8px] pl-[100px]">
          <span className="text-[#FF9F0D]"> We</span>Document Every Food
        </div>
        <div className="w-[705px] h-[60px] font-[700] text-[48px] leading-[56px] ml-[750px]">
          {" "}
          Bean Process untile it is saved
        </div>
        <p className="w-[651px] h-[48px] text-right font-[400] text-[16px] leading-[24px] ml-[770px] mt-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna,{" "}
        </p>
        <div className=" flex">
          <div className="w-[155px] h-[50px] mt-[56px] ml-[1060px] rounded-[30px] border-2 border-[#FF9F0D] text-center flex justify-center items-cente">
            <Link
              className="p-[10px] text-[#E0DFDF]
"
              href="/"
            >
              See More
            </Link>
          </div>
          <div className="w-[60px] h-[60px] mt-[56px] ml-[40px] p-[18px] rounded-full justify-center items-center text-center bg-[#ff9f0d]">
            <CiPlay1 className="w-[24px] h-[24px] m-auto" />
          </div>
          <div className="w-[83px] h-[24px] font-[700] text-[16px] ml-[15px] justify-center items-center text-center mt-[76px] leading-[24px]">
            Play Video
          </div>
        </div>
      </div>

      <div className="w-[1320px] h-[732px] ml-[300px]">
        <Image
          className="ml-[590px] pt-[12px]"
          src="/Blog Post.png"
          alt="pic"
          width={124}
          height={40}
        ></Image>
        <div className="w-[462px] h-[56px] font-[700] text-[48px] leading-[56px] ml-[429px] mt-[8px]">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </div>
        <div className=" pt-[59px] flex gap-[24px]">
          <div className="w-[424px] h-[569px] border-[1px] border-[wite]">
          <Image
          className=""
          src="/Image Placeholder.png"
          alt="pic"
          width={424}
          height={349}
        ></Image>
        <div className="w-[133px] h-[24px] text-[#FF9F0D] font-[400] text-[16px] leading-[24px] ml-[43px] mt-[30px]">10 February 2022 </div>
        <div className="w-[338px] h-[64px] font-[400] text-[24px] leading-[32px] ml-[43px] mt-[16px]">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</div>
        <div className="flex  mt-[32px] ml-[43px]">
        <div className="w-[86px] h-[24px] font-[400] text-[16px] leading-[24px]">Learn More</div>
          <div className="flex ml-[205px] gap-2"><AiOutlineLike className="w-[20px] h-[20px]" />
          <LuMessageSquareMore  className="w-[20px] h-[20px] text-[#FF9F0D]"/>
          <CiShare2  className="w-[20px] h-[20px]"/></div>
        
        </div>
           </div>
           <div className="w-[424px] h-[569px] border-[1px] border-[wite]">
          <Image
          className=""
          src="/Image Placeholder (1).png"
          alt="pic"
          width={424}
          height={349}
        ></Image>
        <div className="w-[133px] h-[24px] text-[#FF9F0D] font-[400] text-[16px] leading-[24px] ml-[43px] mt-[30px]">10 February 2022 </div>
        <div className="w-[338px] h-[64px] font-[400] text-[24px] leading-[32px] ml-[43px] mt-[16px]">Curabitur rutrum velit ac congue malesuada</div>
        <div className="flex  mt-[32px] ml-[43px]">
        <div className="w-[86px] h-[24px] font-[400] text-[16px] leading-[24px]">Learn More</div>
          <div className="flex ml-[205px] gap-2"><AiOutlineLike className="w-[20px] h-[20px]" />
          <LuMessageSquareMore  className="w-[20px] h-[20px] text-[#FF9F0D]"/>
          <CiShare2  className="w-[20px] h-[20px]"/></div>
        
        </div>
           </div>
           <div className="w-[424px] h-[569px] border-[1px] border-[wite]">
          <Image
          className=""
          src="/Image Placeholder (2).png"
          alt="pic"
          width={424}
          height={349}
        ></Image>
        <div className="w-[133px] h-[24px] text-[#FF9F0D] font-[400] text-[16px] leading-[24px] ml-[43px] mt-[30px]">10 February 2022 </div>
        <div className="w-[338px] h-[64px] font-[400] text-[24px] leading-[32px] ml-[43px] mt-[16px]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
        <div className="flex  mt-[32px] ml-[43px]">
        <div className="w-[86px] h-[24px] font-[400] text-[16px] leading-[24px]">Learn More</div>
          <div className="flex ml-[205px] gap-2"><AiOutlineLike className="w-[20px] h-[20px]" />
          <LuMessageSquareMore  className="w-[20px] h-[20px] text-[#FF9F0D]"/>
          <CiShare2  className="w-[20px] h-[20px]"/></div>
        
        </div>
           </div>

        </div>
      </div>
    </>
  );
};
export default Doc;
