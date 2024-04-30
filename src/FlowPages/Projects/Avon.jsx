import { FaDiscord, FaGithub, FaArrowRight } from "react-icons/fa";

export default function Avon() {
  return (
    <>
      <div className='overflow-x-hidden overflow-y-auto h-screen max-h-screen w-screen panel-project p-20'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-3'>
                <h1 className='text-6xl font-bold text-white tracking-tight'>
                  Avon
                </h1>

                <h2 className='text-3xl'>
                  Developer project management made easy. Built in Rust and
                  React
                </h2>
                <h2 className='text-xl opacity-50'>Work in progress</h2>
              </div>
            </div>

            <div className='flex flex-row h-min gap-5 justify-center items-center'>
              <div
                role='button'
                onClick={() => {
                  open("https://github.com/juaneth/avon", "_blank");
                }}
              >
                <FaGithub className='text-4xl hover:text-white transition-all'></FaGithub>
              </div>
            </div>
          </div>

          <div className='divider my-0 py-0'></div>

          <h1 className='text-4xl text-center font-bold text-white'>Widgets</h1>
          <p className='text-2xl text-center text-white'>
            Widgets make tailoring Avon for your specific needs easy; just drag
            and drop what you need.
          </p>

          <div className='w-full flex justify-center'>
            <div className='flex flex-wrap gap-3 justify-center'>
              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Assets</h1>
                <p>
                  Reuse global assets across all your projects and import them
                  (eg. reused files, css classes etc.)
                </p>
              </div>
              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Automation</h1>
                <p>
                  Run scripts for building and packaging your project or write
                  your own scripts to run functions
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Build</h1>
                <p>See your build config and build your project</p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Collab</h1>
                <p>
                  Invite other people to plan and collaborate with on your
                  project
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Dependancies</h1>
                <p>
                  Shows all your projects dependancies in a simple lists with
                  descriptions from NPM/Cargo etc.
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Git</h1>
                <p>
                  Create commits, manage pull requests, manage issues, switch
                  branches and manage your Git repository
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Hosting</h1>
                <p>
                  One click uploads to update your application on your VPS or
                  server.
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Information</h1>
                <p>
                  Shows all your projects info, with custom hooks to customise
                  with
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Templater</h1>
                <p>
                  Create a template from your project and save it so you can
                  create new projects from that template without rewriting
                  boilerplate code
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Todo</h1>
                <p>Simple and intuitive to-do list</p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Discord</h1>
                <p>
                  Shows you a quick overview of your discord servers stats and
                  announcments
                </p>
              </div>

              <div className='p-8 w-96 rounded-lg text-center bg-black/10 border border-neutral-800 flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Build your own</h1>
                <p>Build your own widgets and share them as plugins!</p>
              </div>
            </div>
          </div>
          <div className='divider'></div>
          <div className='flex flex-row justify-center'>
            <div
              onClick={() => {
                open("https://github.com/juaneth/avon", "_blank");
              }}
              className='btn btn-lg bg-white hover:bg-white hover:shadow-2xl hover:shadow-white/20 text-black/90 flex flex-col'
            >
              Open GitHub (Build not available yet)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
