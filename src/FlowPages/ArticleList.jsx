import { Link } from "react-router-dom";

import articles from "../articles.json";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

export default function ArticleList() {
  const navigate = useNavigate();

  useGSAP(() => {
    let articleItem = gsap.utils.toArray(".article-item");
    let articleDesc = gsap.utils.toArray(".article-desc");

    articleItem.forEach((item, i) => {
      let arrowAnimation = gsap.fromTo(
        `#${articleDesc[i].id}`,
        {
          paused: true,
          ease: "expo",
          opacity: 0,
          height: 0,
          y: 5,
          translateX: 72,
        },
        {
          paused: true,
          color: "white",
          height: item.clientHeight / 2,
          opacity: 0.75,
          y: 0,
          translateX: 72,
        }
      );

      item.addEventListener("mouseenter", () => {
        arrowAnimation.play();
      });

      item.addEventListener("mouseleave", () => {
        arrowAnimation.reverse();
      });
    });
  });

  return (
    <>
      <div className='panel h-screen min-h-screen flex flex-row'>
        <div className='panel-project h-screen max-h-screen w-screen'>
          <div className='h-full p-24 flex flex-col justify-between'>
            <div className='w-full flex flex-row justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-7xl lg:text-8xl font-bold text-white tracking-tight'>
                  Articles:
                </h1>

                {articles.map((article) => (
                  <h1
                    role='button'
                    className='item article-item text-6xl lg:text-7xl flex flex-col gap-3'
                    id={article.id}
                    key={article.id}
                    onClick={() => {
                      navigate(`/article/${article.md}`);
                    }}
                  >
                    <div className='flex flex-row items-center'>
                      <FaArrowRight
                        id={`arrow-${article.id}`}
                        className='h-12 item-arrow'
                      ></FaArrowRight>
                      <p className='tracking-tight'>{article.title}</p>
                    </div>

                    <p
                      id={`desc-${article.id}`}
                      className='article-desc text-4xl'
                    >
                      {article.desc} - {article.date}
                    </p>
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
