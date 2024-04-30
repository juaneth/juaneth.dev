import { FaDiscord, FaGithub, FaArrowRight } from "react-icons/fa";

export default function UniSSH() {
  return (
    <>
      <div className='overflow-x-hidden h-screen w-screen panel-project p-20'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-6xl font-bold text-white tracking-tight'>
                  uniSSH
                </h1>
                <h2 className='text-3xl'>A modern SSH Client and Terminal</h2>
              </div>
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

          <div className='divider my-0'></div>

          <h1 className='text-4xl text-center font-bold text-white'>
            Why uniSSH?
          </h1>

          <div className='w-full flex justify-center'>
            <div className='max-w-[80rem] flex flex-wrap gap-3 justify-center'>
              <div className='p-8 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Minimal Design</h1>
                <p>For ease of use and simplicity</p>
              </div>
              <div className='p-8 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>SSH Connections</h1>
                <p>Fast and easy to debug SSH connections</p>
              </div>

              <div className='p-8 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Local Terminal</h1>
                <p>Built in terminal emulator to run commands locally</p>
              </div>

              <div className='p-8 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Customisation</h1>
                <p>Completely customizable UI with Custom CSS</p>
              </div>

              <div className='p-8 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>FTP (WIP)</h1>
                <p>Transmit files without leaving uniSSH</p>
              </div>

              <div className='p-8 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Snippets (WIP)</h1>
                <p>
                  <kbd className='px-2 py-1 text-sm border rounded-lg dark:border-neutral-800'>
                    ctrl
                  </kbd>{" "}
                  +{" "}
                  <kbd className='px-2 py-1 text-sm border rounded-lg dark:border-neutral-800'>
                    i
                  </kbd>{" "}
                  shows frequenty used commands
                </p>
              </div>
            </div>
          </div>
          <div className='divider'></div>
          <div className='flex flex-row justify-center'>
            <div
              onClick={() => {
                open(
                  "https://github.com/uniSSH-Team/uniSSH-releases/releases/tag/v0.0.2",
                  "_blank"
                );
              }}
              className='btn btn-lg bg-white hover:bg-white hover:shadow-2xl hover:shadow-white/20 text-black/90 flex flex-col'
            >
              Download uniSSH for Windows
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
