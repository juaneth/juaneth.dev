import { Link } from "react-router-dom";
import { FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

export default function Socials() {
  return (
    <>
      <div className='panel h-screen min-h-screen max-h-screen'>
        <div className='h-full flex justify-center flex-col gap-8'>
          <div className='flex flex-col gap-12 text-5xl text-center justify-center'>
            <h1 className='text-7xl font-bold text-white'>That's it!</h1>
            <p className='px-32'>
              Thank you for checking this out and dont forget to check out my
              socials!
            </p>
          </div>

          <div className='flex flex-row gap-8 justify-center items-center'>
            <div
              role='button'
              onClick={() => {
                open("https://github.com/juaneth", "_blank");
              }}
              className='flex flex-col justify-center items-center gap-3 hover:text-white transition-all'
            >
              <FaGithub className='text-5xl'></FaGithub>
              <h1 className='text-xl'>GitHub</h1>
            </div>
            <div
              role='button'
              onClick={() => {
                open(
                  "https://www.youtube.com/channel/UChDamCAaFz-utPYGDFcjPQQ",
                  "_blank"
                );
              }}
              className='flex flex-col justify-center items-center gap-3 hover:text-white transition-all'
            >
              <FaYoutube className='text-5xl'></FaYoutube>
              <h1 className='text-xl'>Youtube</h1>
            </div>
            <div
              role='button'
              className='flex flex-col justify-center items-center gap-3 hover:text-white transition-all'
              onClick={() => {
                open("https://discord.gg/SK4mW9shTb", "_blank");
              }}
            >
              <FaDiscord className='text-5xl'></FaDiscord>
              <h1 className='text-xl'>My Server</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
