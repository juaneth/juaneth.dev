import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Hire() {
  return (
    <>
      <div className='panel h-screen min-h-screen flex flex-row'>
        <div className='panel-project h-screen max-h-screen w-screen'>
          <div className='h-full p-24 flex flex-col justify-between'>
            <div className='w-full flex flex-row justify-between'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-7xl lg:text-8xl font-bold text-white tracking-tight'>
                  Hire me:
                </h1>

                <h1
                  role='button'
                  id={"item-email"}
                  className='item text-6xl lg:text-7xl flex flex-col gap-3'
                >
                  <div className='flex flex-row items-center'>
                    <FaArrowRight
                      id={`arrow-email`}
                      className='h-12 item-arrow'
                      onClick={() => {
                        open(
                          "mailto:hire@juaneth.dev?subject=Hiring Enquiry",
                          "_blank"
                        );
                      }}
                    ></FaArrowRight>
                    <p className='tracking-tight'>Email me</p>
                  </div>
                </h1>

                <h1
                  role='button'
                  id={"item-discord"}
                  className='item text-6xl lg:text-7xl flex flex-col gap-3'
                  onClick={() => {
                    open(
                      "https://discord.com/users/910968511273263104",
                      "_blank"
                    );
                  }}
                >
                  <div className='flex flex-row items-center'>
                    <FaArrowRight
                      id={`arrow-discord`}
                      className='h-12 item-arrow'
                    ></FaArrowRight>
                    <p className='tracking-tight'>Send me a DM on Discord</p>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
