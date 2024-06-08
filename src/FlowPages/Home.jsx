import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  document.title = `juaneth.dev`;

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("#homeText", {
      y: 100,
      ease: "expo.out",
      duration: 1.5,
      delay: 0.5,
      opacity: 0,
    });
  });

  return (
    <>
      <div className='panel h-screen min-h-screen max-h-screen'>
        <div
          id='homeText'
          className='flex pointer-events-none flex-col sm:gap-8 gap-4 justify-center items-center text-center h-full'
        >
          <h1 className='sm:text-9xl text-6xl font-bold text-white tracking-tight'>
            juaneth.dev
          </h1>
          <p className='sm:text-5xl text-3xl'>Desktop + Web developer</p>

          <div className='text-warning sm:text-2xl text-xl opacity-75 flex flex-row items-center gap-3'>
            Best viewed on desktop <IoIosWarning></IoIosWarning>
          </div>
        </div>
      </div>
    </>
  );
}
