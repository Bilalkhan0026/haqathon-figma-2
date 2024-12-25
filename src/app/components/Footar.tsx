import React from "react";
import Image from "next/image";
const Footar = () => {
  return (
    <div className='mt-[123px]'>
      <div className="w-[1170px] h-[142.62px] ml-[359px] flex border-b-[1px] border-[#ff9f0d]">
        <div className="">
          <div className="w-[439px] h-[40px] font-[700] text-[32px] leading-[40px]">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?</div>
            <div className="w-[458px] h-[24px] font-[400] text-[16px] leading-[42px]">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </div>
            </div>

          

          <div className="w-[459px] h-[56px] ml-[325px]  flex">
            <input
              className="flex py-[16px] px-[20px] bg-[#FF9F0D]"
              type="text"
              placeholder=" Enter Your Email"
            />
            <div className="w-[163px] h-[56px] py-[16px] px-[20px] text-[#ff9f0d] bg-[#ffffff]">
              {" "}
              Subscribe Now
          </div>
        </div>
      </div>

      <div className="flex mt-[64px]">
      <div className="pl-[300px]">
        <div className=" font-[700] text-[24px] leading-[32px]">About Us.</div>
        <div className="w-[312px] h-[95px] font-[400] text-[16px] mt-[25px] leading-[24px]">
          orporate clients and leisure travelers has been relying on Groundlink
          for dependab safe, and professional chauffeured car service in major
          cities across World.
        </div>

        <div className='flex gap-[16px] mt-[25px]'> <Image src="/Rectangle 8785.png" alt="dil" width={78} height={72}></Image> 
         <Image src="/text.png" alt="pic" width={149} height={74}></Image> </div>
      </div>

      <div  className="w-[143px] h-[367px] ml-[120px]">
         <div className="w-[143px] h-[32px] font-[700] text-[24px] leading-[32px]">Useful Links</div>
         <div className='mt-[20px] w-[87px] '>About</div>
         <div className='mt-[20px] w-[87px] '>News</div>
         <div className='mt-[20px] w-[87px] '>Partners</div>
         <div className='mt-[20px] w-[87px] '>Team</div>
         <div className='mt-[20px] w-[87px] '>Menu</div>
         <div className='mt-[20px] w-[87px] '>Contacts</div>

      </div>
      <div  className="w-[170px] h-[363px] ml-[120px]">
      <div className="w-[67px] h-[32px] font-[700] text-[24px] leading-[32px]">Help?</div>
         <div className='mt-[20px] w-[170px] '>FAQ</div>
         <div className='mt-[20px] w-[170px] '>Term & conditions</div>
         <div className='mt-[20px] w-[170px] '>Reporting</div>
         <div className='mt-[20px] w-[170px] '>Documentation</div>
         <div className='mt-[20px] w-[170px] '>Support Policy</div>
         <div className='mt-[20px] w-[170px] '>Privacy</div>
      </div>

      <div  className="w-[170px] h-[363px] ml-[120px]">
        <div className="w-[139px] h-[32px] font-[700] text-[24px] leading-[32px]">Recent Post</div>
        <Image className='mt-[20px]' src="/Resent post cadr 1 (1).png" alt="pic" width={244} height={53}></Image> 
        <Image className='mt-[20px]' src="/Resent post cadr 2.png" alt="pic" width={244} height={53}></Image> 
        <Image className='mt-[20px]' src="/Resent post cadr 3.png" alt="pic" width={244} height={53}></Image> 
       
        </div>
    
    </div>
    <div className='w-[1920px] h-[99px] pl-[300px] flex items-center bg-[#4F4F4F]'>
        <div className='w-[384px] h-[24px] flex '>
        Copyright © 2022 by Ayeman. All Rights Reserved.
        </div>
        <Image className="ml-[500px]" src="/Sociali icon.png" alt="pic" width={240} height={34}></Image> 
       
       </div>
    </div>
  );
};

export default Footar;
