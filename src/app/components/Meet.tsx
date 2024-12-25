import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const Meet = () => {
  return (
    <>
  
    <section className="w-[1764px] my-[120px]  justify-center items-center">
      <Image className='ml-[848px] mt-[8px]' src='/Chefs.png' alt="pic" width={56} height={40}></Image>
      <div className=" font-[700] text-[48px] leading-[56px] ml-[700px] mt-[8px]"><span className="text-[#FF9F0D]"> Me</span>et Our Chef</div>
      <div className="flex gap-[24px] ml-[300px] mt-[56px]">

        
      <Image src='/Chef card.png' alt="pic" width={312} height={391}></Image>
      <Image src='/Card 2.png' alt="pic" width={312} height={391}></Image>
      <Image src='/Card 3.png' alt="pic" width={312} height={391}></Image>
      <Image src='/Card 2.png' alt="pic" width={312} height={391}></Image>
      </div>
      <div className="w-[155px] h-[50px] mt-[56px] ml-[848px] rounded-[30px] border-2 border-[#FF9F0D] text-center flex justify-center items-cente">
            <Link
              className="p-[10px] text-[#E0DFDF] 
"
              href="/"
            >
            See More
            </Link>
          </div>
          <div className="w-[1273px] h-[770px] my-[120px] ml-[300px]">
          <Image src='/Testimonials.png' alt="pic" width={128} height={40}></Image>
          <h1 className=" font-[700] text-[48px] leading-[56px] mt-[8px]">What our client are saying</h1>
            <div className='w-[868.47px] h-[450.89px] ml-[225.86px] mt-[226px] bg-[#ffffff]'>
                      <Image className='relative left-[120px] top-[-61px]' src="/Text (1).png" alt="pic" width={696.57} height={485.89}></Image>
                      </div>
          </div>
    </section>
    </>
  )
}

export default Meet;

