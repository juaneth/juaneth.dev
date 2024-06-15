import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { BsHddNetworkFill } from "react-icons/bs";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Home() {
  document.title = `juaneth.dev`;

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("#mobile", {
      y: -100,
      ease: "expo.out",
      duration: 0.75,
      opacity: 0,
    });
  });

  return (
    <>
      <div className='panel p-5 bg-black/75 backdrop-blur-md border border-white/30 m-2 rounded-xl shadow-2xl shadow-black/30'>
        <div className='flex pointer-events-none flex-col gap-0 justify-center h-full'>
          <h1 className='text-2xl font-bold text-white tracking-tighter'>
            juaneth.dev
          </h1>
          <p className='text-lg tracking-tight'>Desktop + Web developer</p>
        </div>
      </div>
    </>
  );
}

export default function Mobile() {
  return (
    <>
      <div className='fixed bottom-0 w-full'>
        <div className='h-full m-2 p-4 text-3xl bg-black/75 backdrop-blur-md border border-white/30 rounded-xl flex flex-row justify-around items-center'>
          <MdArticle></MdArticle>
          <BsHddNetworkFill></BsHddNetworkFill>

          <div className='divider divider-horizontal mx-0'></div>

          <FaGithub
            onClick={() => {
              open("https://github.com/juaneth", "_blank");
            }}
          ></FaGithub>
          <FaDiscord
            onClick={() => {
              open("https://discord.gg/SK4mW9shTb", "_blank");
            }}
          ></FaDiscord>
          <FaYoutube
            onClick={() => {
              open(
                "https://www.youtube.com/channel/UChDamCAaFz-utPYGDFcjPQQ",
                "_blank"
              );
            }}
          ></FaYoutube>
        </div>
      </div>

      <div id='mobile'>
        <Home></Home>
        <div className='flex flex-col gap-3 p-6 bg-black/50 backdrop-blur-md border border-white/30 rounded-xl m-2'>
          <div className='flex flex-col items-start'>
            <h1 className='text-3xl text-white font-bold tracking-tight'>
              Projects
            </h1>

            <ul className='flex flex-col gap-1'>
              <li className='text-2xl'>Avon</li>
              <li className='text-2xl'>uniSSH</li>
            </ul>
          </div>

          <div className='divider my-0'></div>

          <div className='flex flex-col items-start'>
            <h1 className='text-3xl text-white font-bold tracking-tight'>
              Services
            </h1>

            <ul className='flex flex-col gap-1'>
              <li className='text-2xl'>Order</li>
            </ul>
          </div>

          <div className='divider my-0'></div>
        </div>
      </div>
    </>
  );
}
