import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "../article.css";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import articles from "../articles.json";
import rehypeRaw from "rehype-raw";

import { RxExit } from "react-icons/rx";
import { GoShare } from "react-icons/go";

export default function Article() {
  let { id } = useParams();

  let article = articles.find((data) => data.md === id);

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/articleFiles/${id}.md`)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
        document.documentElement.scrollTop = 0;
        document.title = `${article.title} | juaneth.dev`;
      });
  }, []);

  return (
    <>
      <div className='grow flex justify-center'>
        <div className='p-5 flex flex-col gap-3 justify-center w-full md:w-[80rem]'>
          <div className='flex flex-row rounded-lg justify-between w-full border border-white/30'>
            <div className='join'>
              <Link
                to={"/"}
                className='btn bg-black/75 h-full w-32 text-xl text-white hover:bg-white/100 hover:text-black hover:shadow-xl hover:shadow-white/20 join-item'
              >
                <RxExit></RxExit>
              </Link>

              <btn
                to={"/"}
                className='btn h-full w-16 text-xl text-white hover:bg-white/100 hover:text-black hover:shadow-xl hover:shadow-white/20 join-item'
              >
                <GoShare></GoShare>
              </btn>
            </div>

            <div className='text-center px-4 gap-4 items-center flex flex-row text-xl'>
              <h1>
                <b className='text-xl'>Date: </b>
                {article.date}
              </h1>

              <h1>
                <b className='text-xl'>ID: </b>
                {article.md}
              </h1>
            </div>
          </div>

          {/* For tailwind to generate kbd-sm css */}
          <kbd className='kbd kbd-sm hidden'></kbd>

          <Markdown
            className='article text-white/90 py-8 px-10 bg-neutral-950/50 rounded-lg border border-white/30 w-full'
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          ></Markdown>
        </div>
      </div>
      <div className='bg fixed top-0 left-0 h-screen w-screen -z-10'></div>
    </>
  );
}
