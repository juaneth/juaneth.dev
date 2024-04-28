import { useEffect, useState, useRef } from "react";

import { useParams, ScrollRestoration } from "react-router-dom";

import Home from "./FlowPages/Home";
import Projects from "./FlowPages/Projects";
import ArticleList from "./FlowPages/ArticleList";
import Hire from "./FlowPages/Hire";
import Socials from "./FlowPages/Socials";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Flow() {
  {
    /* GSAP Snap Scroll stuff stolen from https://gsap.com/community/forums/topic/24423-how-to-snap-instantly-on-slight-scroll/
    
    Please show ZachSaucier from the GSAP forums some love ️️❤️*/
  }

  let { projectId } = useParams();

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [currentFlow, setCurentFlow] = useState(0);
  const [currentProject, setCurentProject] = useState(0);

  useGSAP(() => {
    let panels = gsap.utils.toArray(".panel"),
      observer = ScrollTrigger.normalizeScroll(true),
      scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, x: 0, autoKill: false },
        onStart: () => {
          observer.disable();
          observer.enable();
          setCurentProject(0);
          if (projectId == undefined) {
            setVerticalScrollVisible(true);
          }
        },
        duration: 0.7,
        ease: "expo.out",
        onComplete: () => {
          scrollTween = null;
        },
        overwrite: true,
      });

      setCurentFlow(i - currentFlow);
    }

    if (projectId) {
      setVerticalScrollVisible(false);
      goToSection(1);
    }

    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    document.addEventListener(
      "touchstart",
      (e) => {
        if (scrollTween) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      { capture: true, passive: false }
    );

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: 1 / (panels.length - 1),
    });
  });

  const { contextSafe } = useGSAP();

  const continueFunc = contextSafe(() => {
    setCurentFlow(currentFlow + 1);

    gsap.to(window, {
      scrollTo: { y: (currentFlow + 1) * innerHeight, autoKill: false },
      onStart: () => {},
      duration: 0.7,
      ease: "expo.out",
      overwrite: false,
    });
  });

  const backFunc = contextSafe(() => {
    setCurentFlow(currentFlow - 1);

    gsap.to(window, {
      scrollTo: { y: (currentFlow - 1) * innerHeight, autoKill: false },
      onStart: () => {},
      duration: 0.7,
      ease: "expo.out",
      overwrite: true,
    });
  });

  const popInAnimation = contextSafe(() => {
    gsap.from("#backBtn", {
      y: -200,
      ease: "expo.out",
    });
  });

  const [verticalScrollVisible, setVerticalScrollVisible] = useState(true);

  return (
    <>
      <ScrollRestoration
        preventScrollReset={true}
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
      {verticalScrollVisible && (
        <div className='fixed top-0 left-0 h-screen w-screen flex flex-col justify-between pointer-events-none items-center p-12 gap-3'>
          {currentFlow >= 1 ? (
            <div
              role='button'
              className='flex flex-col gap-3 items-center pointer-events-auto'
              onClick={backFunc}
              onLoad={popInAnimation}
              id='backBtn'
            >
              <img src='/assets/Continue.svg' className='h-12 rotate-180' />
              <h1 className='font-bold text-4xl text-white'>Back</h1>
            </div>
          ) : (
            <div></div>
          )}
          <div
            role='button'
            className='flex flex-col gap-3 items-center pointer-events-auto'
            onClick={continueFunc}
          >
            <img src='/assets/Continue.svg' className='h-12' />
            <h1 className='font-bold text-4xl text-white'>Continue</h1>
          </div>
        </div>
      )}

      <div className='flex flex-col'>
        <Home></Home>
        <Projects
          setVerticalScrollVisible={setVerticalScrollVisible}
          currentProject={currentProject}
          setCurentProject={setCurentProject}
        ></Projects>
        <ArticleList></ArticleList>
        <Hire></Hire>
        <Socials></Socials>
      </div>
      <div className='bg fixed top-0 left-0 h-screen w-screen -z-10'></div>
    </>
  );
}
