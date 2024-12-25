import React from "react";
import Image from "next/image";
const Menu = () => {
  return (
    <div className=" w-[1320px] h-[656px] mt-[120px] ml-[300px]">
      <Image
        className="ml-[580px] mt-[8px]"
        src="/Choose & pick.png"
        alt="pic"
        width={144}
        height={40}
      ></Image>
      <div className=" font-[700] text-[48px] leading-[56px] justify-center items-center text-center mt-[8px]">
        <span className="text-[#FF9F0D]"> Fr</span>om Our Menu
      </div>
      <div className="mt-[56px]">
        <ul className="flex gap-[100px] items-center text-center">
          <li className="font-[700] text-[20px] leading-[28px] text-[#FF9F0D]">
            Breakfast
          </li>
          <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
            Lunch
          </li>
          <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
            Dinner
          </li>
          <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
            Dessert
          </li>
          <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
            Drink
          </li>
          <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
            Snack
          </li>
          <li className=" font-[400] text-[20px] leading-[28px] mt-[8px]">
            Suops
          </li>
        </ul>
      </div>
      <div className="flex" >
      <div className="w-[515px] h-[406px] mt-[56px] bg-[url('/abg.png')]">
        {" "}
        <Image
          className="ml-[75px]"
          src="/abgc.png"
          alt="pic"
          width={366}
          height={362}
        ></Image>
      </div>

          
           <div className="ml-[21px] mt-[56px]">
          <div className="w-[376px] h-[79px] gap-[9px] flex">
          <Image
          src="/aaa.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Lettuce Leaf
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
        </div>
          </div>

          <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
          <Image
          src="/bbb (2).png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Fresh Breakfast
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">14.5$</div>
        </div>
          </div>

          <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
          <Image
          src="/ccc.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Mild Butter
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
        </div>
          </div>

          <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
          <Image
          src="/ddd.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Fresh Bread
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
        </div>
          </div>


          </div>
{/* div2 */}

          <div className="ml-[32px] mt-[56px] ">
          <div className="w-[376px] h-[79px] gap-[9px] flex">
          <Image
          src="/eee.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Glow Cheese
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
        </div>
          </div>

          <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
          <Image
          src="/fff.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Italian Pizza
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">14.5$</div>
        </div>
          </div>

          <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
          <Image
          src="/ggg.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Sllice Beef
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
        </div>
          </div>

          <div className="w-[376px] h-[79px] gap-[9px] flex mt-[31px]">
          <Image
          src="/hhh.png"
          alt="pic"
          width={80}
          height={79}
        ></Image>
        <div className="font-[700] text-[20px] leading-[28px]">Mushaom Pizza
        <div className="font-[400] text-[14px] leading-[22px]">Lacus nisi, et ac dapibus velit in consequat.</div>
        <div className="font-[700] text-[18px] leading-[26px] text-[#FF9F0D]">12.5$</div>
        </div>
          </div>


          </div>


    </div>
    </div>
  );
};
export default Menu;
