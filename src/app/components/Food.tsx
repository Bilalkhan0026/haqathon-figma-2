import React from "react";
import Image from "next/image";
 const Food = () => {
  return (
    
//   const foodIetem:any =[
//     {
//       id: 1,
//       name: 'Save 30%',
//       description:'Fast Food Dish',
//       image:'/1cd.png',
//     },
//     {
//       id: 2,
//       name: 'Save 30%',
//       description:'Fast Food Dish',
//       image:'/1cd.png',
//     },
//     {
//       id: 3,
//       name: 'Save 30%',
//       description:'Fast Food Dish',
//       image:'/1cd.png',
//     },
//     {
//       id: 4,
//       name: 'Save 30%',
//       description:'Fast Food Dish',
//       image:'/1cd.png',
//     },
    
//   ];
//   return (
//     <div className="my-[120px]">
//       <div className="w-[1320px] h-[489px] ml-[300px] flex bg-green-300">
//        { foodIetem.map((food)=>(<div key={food.id}>
//         <Image src={food.image} alt={food.name} width={120} height={40}></Image>
//         <p>{food.description}</p></div>))}
//       </div>
//     </div>
    // <div className="my-[120px]">
    //     <div className="w-[1320px] h-[489px] ml-[300px] justify-center items-center text-center">
    //     <Image className="ml-[571px]" src="/Food Category.png" alt="pic" width={177} height={40}></Image>
    //     <div className=" font-[700] text-[48px] leading-[56px]"><span className="text-[#FF9F0D]"> Ch</span>oose Food Iteam</div>
       
    //     <Image className='mt-[56px]' src="/im.png" alt="pic" width={1320} height={329}></Image>
    // </div>


    // </div>
    <div className="my-[120px]">
        <div className="w-[1320px] h-[489px] ml-[300px] justify-center items-center text-center">
        <Image className="ml-[571px]" src="/Food Category.png" alt="pic" width={177} height={40}></Image>
        <div className=" font-[700] text-[48px] leading-[56px]"><span className="text-[#FF9F0D]"> Ch</span>oose Food Iteam</div>
       <div className="flex mt-[56px] gap-[32px]">
        <div className="w-[305px] h-[328px]  bg-[url('/1cd.png')]">
        <h1 className=" font-[700] text-[18px] leading-[26px] bg-white w-[125px] h-[40px] ml-[80px] py-[8px] mt-[130px] text-[#FF9F0D]">Save 30%</h1>
        <p className=" font-[700] text-[18px] leading-[26px] text-white w-[206px] h-[46px] mt-[11px] py-[10px] bg-[#FF9F0D]">Fast Food Dish</p>
        </div>
        <Image src="/22cd.png" alt="pic" width={305} height={328}></Image>
        <Image src="/3cd.png" alt="pic" width={305} height={328}></Image>
        <Image src="/4cd.png" alt="pic" width={305} height={328}></Image>
    </div>
   </div>
   </div>
    );
};

export default Food;