import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "../article.css";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import articles from "../articles.json";
import rehypeRaw from "rehype-raw";

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
      <div className='bg-gradient grow'>
        <div className='p-5 flex flex-col md:flex-row gap-3 justify-center'>
          <div className='join join-vertical w-full md:w-48'>
            <Link
              to={"/"}
              className="btn before:content-['<-'] font-normal bg-neutral-950 gridbg text-xl bordered-all hover:bordered-all hover:bg-black/80 join-item min-w-48"
            >
              Go To Home
            </Link>
            <div className='bg-neutral-950 text-center flex flex-col text-xl p-4 gridbg bordered-all hover:bordered-all join-item'>
              <h1>
                <b className='text-2xl'>Author:</b> <br></br> Juaneth
              </h1>
              <h1>
                <b className='text-2xl'>Date:</b> <br></br> {article.date}
              </h1>
            </div>
          </div>

          <Markdown
            className='article p-8 bg-neutral-950 gridbg rounded-lg bordered-all w-full md:w-[80rem]'
            children={markdown}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          ></Markdown>
        </div>
      </div>
    </>
  );
}
