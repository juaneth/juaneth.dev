import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";

export default function Home() {
  document.title = `juaneth.dev`;

  return (
    <>
      <div className='panel h-screen min-h-screen max-h-screen'>
        <div className='flex flex-col sm:gap-8 gap-4 justify-center items-center text-center h-full'>
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
