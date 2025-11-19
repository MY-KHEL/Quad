"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const countDown = [
    {title : 'days',value:days},
    {title : 'hours',value:hours},
    {title : 'minutes',value:minutes},
    {title : 'seconds',value:seconds},
  ]
  useEffect(() => {
    const targetDate = new Date("2025-11-27T23:59:59");
    const interval = setInterval(() => {
      const currentDate = new Date();
      // console.log(currentDate);

      const timeDifference = targetDate.getTime() - currentDate.getTime();
      // console.log(timeDifference);

      const day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      const hour = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minute = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const second = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(day);
      setHours(hour);
      setMinutes(minute);
      setSeconds(second);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-white  h-screen ">
      <div className="pt-[50px]">
        <Image
          src={"/pngs/logo.png"}
          alt="logo"
          width={100}
          height={42}
          className="mx-auto"
        />
      </div>
      <div className="px-6 lg:px-[62px] flex max-md:flex-col gap-[15px] h-[calc(100dvh-95px)] pt-[5rem] md:items-center ">
        <div className="flex flex-col gap-[50px] max-w-[517px] w-full ">
          <div className="">
            <h1 className="font-bold leading-[140%] max-md:text-center text-[3rem] md:text-[60px]">Coming Soon</h1>
            <p className="text-[1rem] max-md:text-center md:text-[21px] font-normal leading-[140%]">Be the first to know when the biggest online marketplace launches.</p>
          </div>
          <div className="flex justify-between items-center ">
          {countDown.map((item,index)=>(
            <div className="flex flex-col " key={index}>
          <p className="text-[3rem] font-bold md:text-[3.75rem]  leading-[140%] text-white">
           {item.value} {index !== countDown.length-1 ? ':' : ''}
          </p>
          <p className="text-[1rem] text-normal md:text-[21px] capitalize ">{item.value <= 1 ? item.title.slice(0, -1) : item.title}</p>
          </div>
          
          ))}
          </div>

          <Link href='https://chat.whatsapp.com/D9O1WXHLQEiBaGoyFXU6Ov' target="_blank" className="w-full py-4 text-center px-8 bg-[#48B7DD] rounded-lg">
              Join the Quad Squad
          </Link>
        </div>
        <div className="relative w-full  h-full ">
          <Image src='/pngs/image.jpg' alt="hero-section" fill className="object-cover"/>
        </div>
      </div>
    </section>
  );
}
