import { FaDiscord, FaGithub } from "react-icons/fa";

export default function UniSSH() {
  return (
    <>
      <div className='overflow-x-hidden h-screen w-screen panel-project p-20'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-6xl font-bold text-white'>uniSSH</h1>
              <h2 className='text-3xl'>A modern SSH Client</h2>
            </div>

            <div className='flex flex-row h-min gap-5 justify-center items-center'>
              <div
                role='button'
                onClick={() => {
                  open(
                    "https://github.com/uniSSH-Team/uniSSH-releases",
                    "_blank"
                  );
                }}
              >
                <FaGithub className='text-4xl hover:text-white transition-all'></FaGithub>
              </div>

              <div
                role='button'
                onClick={() => {
                  open("https://discord.gg/GNweWy8YWc", "_blank");
                }}
              >
                <FaDiscord className='text-4xl hover:text-white transition-all'></FaDiscord>
              </div>
            </div>
          </div>

          <div className='divider'></div>

          <div className='px-6 py-5 bg-slate-500/15 rounded-md bordered-all'>
            <h1 className='text-3xl font-semibold text-white'>Features</h1>

            <div className='grid grid-cols-8 gap-4'>
              <div className='bg-white col-span-3'>
                <h1>Clear design language</h1>
              </div>
              <div className='bg-white'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
