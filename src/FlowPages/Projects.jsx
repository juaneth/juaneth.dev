import { Link } from "react-router-dom";

import { useState } from "react";

import UniSSH from "./Projects/UniSSH";
import Avon from "./Projects/Avon";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Projects({ setVerticalScrollVisible }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [currentProject, setCurentProject] = useState(0);

  useGSAP(() => {
    let projects = gsap.utils.toArray(".panel-project"),
      observer = ScrollTrigger.normalizeScroll(true),
      scrollTweenProjects;

    scrollTweenProjects = gsap.to(window, {
      scrollTo: { x: currentProject * innerWidth, autoKill: false },
      onStart: () => {
        observer.disable();
        observer.enable();
      },
      duration: 0.7,
      ease: "expo.out",
      onComplete: () => {
        scrollTweenProjects = null;
      },
      overwrite: true,
    });
  }, [currentProject]);

  const { contextSafe } = useGSAP();

  const popInAnimationProjects = contextSafe(() => {
    gsap.from("#backBtnProjects", {
      x: -200,
      ease: "expo.out",
    });
  });

  function Goto(i) {
    setVerticalScrollVisible(false);
    setCurentProject(i);
  }

  return (
    <>
      <div className='panel h-screen min-h-screen flex flex-row w-max'>
        {currentProject > 0 && (
          <div className='fixed top-0 left-0 h-screen w-screen flex flex-col items-start justify-end pointer-events-none p-12 gap-3'>
            <div
              role='button'
              id='backBtnProjects'
              className='flex flex-col gap-3 items-center pointer-events-auto opacity-50 hover:opacity-100 transition-colors'
              onClick={() => {
                setVerticalScrollVisible(true);
                setCurentProject(0);
              }}
              onLoad={popInAnimationProjects}
            >
              <img src='/assets/Continue.svg' className='h-8 rotate-90' />
              <h1 className='font-bold text-3xl text-white'>Projects</h1>
            </div>
          </div>
        )}

        <div className='panel-project h-screen max-h-screen w-screen'>
          <div className='h-full p-24 flex flex-col justify-between'>
            <div className='w-full flex flex-row justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-7xl lg:text-8xl font-bold text-white tracking-tight'>
                  Projects:
                </h1>
                <p
                  onClick={() => {
                    Goto(1);
                  }}
                  role='button'
                  className='text-6xl lg:text-7xl'
                >
                  uniSSH
                </p>
                <p
                  onClick={() => {
                    Goto(2);
                  }}
                  role='button'
                  className='text-6xl lg:text-7xl'
                >
                  Avon Project Manager
                </p>
              </div>

              <div className='flex flex-col gap-3 text-end'>
                <h1 className='text-6xl font-bold text-white tracking-tight'>
                  Legacy Projects:
                </h1>
                <p className='text-5xl'>bot.dev</p>
                <p className='text-5xl'>Omni.dev (Omnipetal)</p>
              </div>
            </div>

            <div className='text-end'>
              <h1 className="text-white text-5xl after:content-['_↗']">
                More on GitHub
              </h1>
            </div>
          </div>
        </div>
        <UniSSH></UniSSH>
        <Avon></Avon>
      </div>
    </>
  );
}
