import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className='panel h-screen min-h-screen max-h-screen'>
        <div className='h-full p-24 flex flex-col justify-between'>
          <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-8xl font-bold text-white tracking-tight'>
                Projects:
              </h1>
              <p className='text-7xl'>uniSSH</p>
              <p className='text-7xl'>Avon</p>
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
    </>
  );
}
