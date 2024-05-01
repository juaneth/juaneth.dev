import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";

export default function Home() {
  document.title = `juaneth.dev`;

  return (
    <>
      <div className='panel h-screen min-h-screen max-h-screen'>
        <div className='flex flex-col gap-8 justify-center items-center h-full'>
          <h1 className='text-9xl font-bold text-white tracking-tight'>
            juaneth.dev
          </h1>
          <p className='text-5xl'>Desktop + Web developer</p>

          <div className='text-warning text-2xl opacity-75 flex flex-row items-center gap-3'>
            Best viewed on desktop <IoIosWarning></IoIosWarning>
          </div>
        </div>
      </div>
    </>
  );
}
