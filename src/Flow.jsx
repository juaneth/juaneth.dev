import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

import articles from "./articles.json";

import Home from "./FlowPages/Home";
import Projects from "./FlowPages/Projects";
import Article from "./FlowPages/Articles";
import Hire from "./FlowPages/Hire";
import Socials from "./FlowPages/Socials";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Flow() {
  document.title = `juaneth.dev`;

  {
    /* GSAP Snap stuff stolen from https://gsap.com/community/forums/topic/24423-how-to-snap-instantly-on-slight-scroll/
    
    Please show ZachSaucier from the GSAP forums some love ️️❤️*/
  }

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useGSAP(() => {
    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        onStart: () => {
          observer.disable();
          observer.enable();
        },
        duration: 1,
        ease: "expo.out",
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    let panels = gsap.utils.toArray(".panel"),
      observer = ScrollTrigger.normalizeScroll(true),
      scrollTween;

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

  return (
    <>
      <div className='fixed top-0 left-0 h-screen w-screen z-10 flex flex-col justify-end items-center p-12 gap-3'>
        <img src='/assets/Continue.svg' className='h-12' />
        <h1 className='font-bold text-4xl text-white'>Continue</h1>
      </div>
      <div className='flex flex-col' id='GScroll'>
        <Home></Home>
        <Projects></Projects>
        <Article></Article>
        <Hire></Hire>
        <Socials></Socials>
      </div>
      <div className='bg fixed top-0 left-0 h-screen w-screen -z-10'></div>
    </>
  );
}
