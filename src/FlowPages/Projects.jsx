import { useEffect, useState } from "react";

import UniSSH from "./Projects/UniSSH";
import Avon from "./Projects/Avon";

import { useParams, useNavigate } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { FaArrowRight } from "react-icons/fa";

export default function Projects({
  setVerticalScrollVisible,
  currentProject,
  setCurentProject,
}) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  let { projectId } = useParams();
  const navigate = useNavigate();

  useGSAP(() => {
    let projects = gsap.utils.toArray(".panel-project"),
      observer = ScrollTrigger.normalizeScroll(true),
      scrollTweenProjects;

    if (projectId == "avon") {
      setCurentProject(2);
    }

    if (projectId == "uniSSH" || projectId == "unissh") {
      setCurentProject(1);
    }

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
      overwrite: false,
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

  useGSAP(() => {
    let items = gsap.utils.toArray(".item");
    let itemArrows = gsap.utils.toArray(".item-arrow");

    items.forEach((item, i) => {
      let animation = gsap.fromTo(
        `#${item.id}`,
        {
          paused: true,
          duration: 0.3,
          repeatDelay: 0,
          transformOrigin: "center left",
          ease: "expo",
          color: "#C9C9C9",
          translateX: -64,
        },
        {
          paused: true,
          duration: 0.3,
          repeatDelay: 0,
          transformOrigin: "center left",
          color: "white",
          translateX: -64,
        }
      );

      let arrowAnimation = gsap.fromTo(
        `#${itemArrows[i].id}`,
        {
          paused: true,
          duration: 0.3,
          repeatDelay: 0,
          ease: "expo",
          color: "#C9C9C9",
          x: -96,
          opacity: 0,
        },
        {
          paused: true,
          duration: 0.3,
          repeatDelay: 0,
          color: "white",
          opacity: 100,
          x: 0,
        }
      );

      item.addEventListener("mouseenter", () => {
        animation.play();

        arrowAnimation.play();
      });

      item.addEventListener("mouseleave", () => {
        animation.reverse();
        arrowAnimation.reverse();
      });
    });
  });

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

                if (projectId) {
                  navigate("/");
                }
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
                  className='item text-6xl lg:text-7xl flex flex-row items-center'
                  id='item-uniSSH'
                >
                  <FaArrowRight
                    id='unissh-arrow'
                    className='h-12 item-arrow'
                  ></FaArrowRight>
                  <h1>uniSSH</h1>
                </p>
                <p
                  onClick={() => {
                    Goto(2);
                  }}
                  role='button'
                  className='item text-6xl lg:text-7xl flex flex-row items-center'
                  id='item-avon'
                >
                  <FaArrowRight
                    id='avon-arrow'
                    className='h-12 item-arrow'
                  ></FaArrowRight>
                  <h1>Avon Project Manager</h1>
                </p>
              </div>

              <div className='flex flex-col gap-3 text-end'>
                <h1 className='text-6xl font-bold text-white tracking-tight'>
                  Legacy Projects:
                </h1>
                <p
                  role='button'
                  className="text-white/75 hover:text-white transition-all text-5xl after:content-['_↗'] hover:underline"
                  onClick={() => {
                    open("https://github.com/juaneth/bot.dev", "_blank");
                  }}
                >
                  bot.dev
                </p>
                <p
                  role='button'
                  className="text-white/75 hover:text-white transition-all text-5xl after:content-['_↗'] hover:underline"
                  onClick={() => {
                    open("https://github.com/juaneth/Omnipetal", "_blank");
                  }}
                >
                  Omni.dev (Omnipetal)
                </p>
              </div>
            </div>

            <div className='text-end'>
              <h1
                role='button'
                className="text-white/75 hover:text-white transition-all text-5xl after:content-['_↗'] hover:underline"
                onClick={() => {
                  open("https://github.com/juaneth?tab=repositories", "_blank");
                }}
              >
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
