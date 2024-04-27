export default function UniSSH() {
  document.title = `uniSSH | juaneth.dev`;

  return (
    <>
      <div className='inter pb-10 overflow-x-hidden'>
        <div className='hero bg-neutral-950 min-h-96 bordered-b shadow-n-950 shadow-2xl'>
          <div className='hero-content px-8 text-center'>
            <div className='absolute z-20 h-96 overflow-hidden flex justify-center items-center fade-in rotate opacity-50'>
              <svg
                className='h-[48rem] z-10'
                xmlns='http://www.w3.org/2000/svg'
                height='2800'
                viewBox='0 0 2798 2800'
                fill='none'
              >
                <g filter='url(#filter0_f_1_3)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1061.7 674.575C789.131 801.909 600.233 1078.86 600.233 1400C835.461 1350.78 1006.5 1275.05 1129.05 1187.96C1041.74 990.533 1036.04 799.874 1061.7 674.575Z'
                    fill='#77CF85'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1299.02 1450.95C1202.62 1718.04 1209.95 2004.08 1246.18 2185.4C878.145 2114.03 600.233 1789.53 600.233 1400C835.461 1350.78 1006.5 1275.05 1129.05 1187.96C1167.99 1276.01 1223.16 1365.41 1299.02 1450.95Z'
                    fill='#5F85CE'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2040.03 1877C1894.47 2073.02 1661.46 2200 1398.84 2200C1346.63 2200 1295.59 2194.98 1246.18 2185.4C1209.95 2004.08 1202.62 1718.04 1299.02 1450.95C1451.01 1622.36 1686.06 1778.31 2040.03 1877Z'
                    fill='#A45FCE'
                  />
                  <path
                    d='M2197.45 1400C2197.45 1178.68 2107.73 978.346 1962.74 833.512C1591.49 940.768 1394.44 1186.57 1299.02 1450.95C1451.01 1622.36 1686.06 1778.31 2040.03 1877C2138.93 1743.81 2197.45 1578.75 2197.45 1400Z'
                    fill='#CE9B5F'
                  />
                  <path
                    d='M1962.74 833.512C1818.28 689.212 1618.96 600 1398.84 600C1435.11 738.47 1404.85 991.983 1129.05 1187.96C1167.99 1276.01 1223.16 1365.41 1299.02 1450.95C1394.44 1186.57 1591.49 940.768 1962.74 833.512Z'
                    fill='#B1CE5F'
                  />
                  <path
                    d='M1398.84 600C1278.37 600 1164.12 626.723 1061.7 674.575C1036.04 799.874 1041.74 990.533 1129.05 1187.96C1404.85 991.983 1435.11 738.47 1398.84 600Z'
                    fill='#5F85CE'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_f_1_3'
                    x='0.23291'
                    y='0'
                    width='2797.22'
                    height='2800'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='BackgroundImageFix'
                      result='shape'
                    />
                    <feGaussianBlur
                      stdDeviation='250'
                      result='effect1_foregroundBlur_1_3'
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className='max-w-md flex flex-col items-center z-30'>
              <div className='flex flex-row justify-center items-center gap-5'>
                <h1 className='text-5xl font-semibold text-shadow-white'>
                  uniSSH
                </h1>
                <img
                  className='h-16 bordered-all rounded-full shadow-xl shadow-white/5'
                  src='/uniSSH.png'
                  alt='icon'
                />
              </div>

              <div className='divider mb-0'></div>

              <p className='py-6'>
                uniSSH is an SSH Client and terminal built for the modern age.
              </p>
              <div className='join'>
                <button
                  onClick={() => {
                    window.open(
                      "https://github.com/uniSSH-Team/uniSSH-releases/releases/latest/",
                      "_blank"
                    );
                  }}
                  className='btn btn-primary join-item bordered-all hover:bordered-all'
                >
                  Download
                </button>
                <button
                  onClick={() => {
                    window.open("https://discord.gg/GNweWy8YWc", "_blank");
                  }}
                  className='btn btn-primary join-item bordered-all hover:bordered-all'
                >
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center'>
          <div className='mt-8 md:max-w-[80rem] px-8 md:px-0 flex flex-wrap gap-3 justify-center'>
            <div className='card hover:border-white/40 hover:border-0.5 transition gridbg md:w-72 w-full bordered-all rounded-lg shadow-xl text-center'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold w-full text-center'>
                  Minimal Design
                </h2>
                <p>For ease of use and simplicity</p>
              </div>
            </div>

            <div className='card hover:border-white/40 hover:border-0.5 hover:-translate-y-1 transition gridbg md:w-72 w-full bordered-all rounded-lg shadow-xl text-center'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold w-full text-center'>
                  SSH Connections
                </h2>
                <p>Fast and easy to debug SSH connections</p>
              </div>
            </div>
            <div className='card hover:border-white/40 hover:border-0.5 hover:-translate-y-1 transition gridbg md:w-72 w-full bordered-all rounded-lg shadow-xl text-center'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold w-full text-center'>
                  Local Connections
                </h2>
                <p>Built in terminal emulator to run commands locally</p>
              </div>
            </div>
            <div className='card hover:border-white/40 hover:border-0.5 hover:-translate-y-1 transition gridbg md:w-72 w-full bordered-all rounded-lg shadow-xl text-center'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold w-full text-center'>
                  Customization
                </h2>
                <p>Completely customizable UI with Custom CSS</p>
              </div>
            </div>
            <div className='card hover:border-white/40 hover:border-0.5 hover:-translate-y-1 transition gridbg md:w-72 w-full bordered-all rounded-lg shadow-xl text-center'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold w-full text-center'>
                  FTP Viewer{" "}
                </h2>
                <p>Transmit files without leaving uniSSH</p>

                <span className='absolute -top-2 -right-5 badge bordered-all bg-error font-bold'>
                  Work in Progress
                </span>
              </div>
            </div>
            <div className='card hover:border-white/40 hover:border-0.5 hover:-translate-y-1 transition gridbg md:w-72 w-full bordered-all rounded-lg shadow-xl text-center'>
              <div className='card-body'>
                <h2 className='text-xl font-semibold w-full text-center'>
                  Snippets{" "}
                </h2>
                <p>
                  <kbd className='kbd kbd-sm'>ctrl</kbd>+
                  <kbd className='kbd kbd-sm'>I</kbd> shows frequenty used
                  commands
                </p>

                <span className='absolute opacity-100 -top-2 -right-5 badge bordered-all bg-error font-bold'>
                  Work in Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
