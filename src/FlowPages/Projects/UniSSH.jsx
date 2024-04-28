import GitHubIcon from "@mui/icons-material/GitHub";

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

            <div className='flex flex-row h-min gap-3 justify-center items-center'>
              <div
                onClick={() => {
                  open(
                    "https://github.com/uniSSH-Team/uniSSH-releases",
                    "_blank"
                  );
                }}
              >
                <GitHubIcon
                  className='text-white/75 hover:text-white'
                  fontSize='large'
                ></GitHubIcon>
              </div>
            </div>
          </div>

          <div className='divider'></div>

          <div className='px-6 py-5 bg-slate-500/15 rounded-md bordered-all'>
            <h1 className='text-3xl font-semibold text-white'>Features</h1>
          </div>
        </div>
      </div>
    </>
  );
}
