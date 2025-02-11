import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen sm:flex-row w-full">
      <div className="bg-[#F3F4F6] flex-1 h-screen w-screen relative flex justify-center z-0">
        <div>
          <div className="flex items-center w-[567px] h-20 rounded-[48px] bg-white pr-5 pl-4 mt-10 ml-10 relative z-10">
            <img className="w-12 h-12" src="search.png" />
            <input
              placeholder="Search"
              type="search"
              className="bg-transparent flex-1 text-[32px] outline-none"
            />
          </div>
          <img className=" w-44 h-44  ml-16 mt-[-40px] " src="day.png"></img>
        </div>
        <div className="w-[414px] h-[828px] bg-white/30 backdrop-blur-md rounded-[48px] mt-36 absolute">
          <div className="flex justify-between items-center">
            <div>
              <h6 className="ml-10 pt-5 text-[18px] text-cool-gray-400 font-[Manrope] font-medium">
                date
              </h6>
              <h1 className="ml-10 text-[48px] text-cool-gray-900 font-[Manrope] font-medium">
                City
              </h1>
            </div>
            <img className="w-8 h-8 mr-10" src="loc-pin.png"></img>
          </div>

          <img className="m-auto" src="sun.png"></img>
          <h2 className="text-[144px] font-[Manrope] font-extrabold ml-12">
            hem
          </h2>
          <p className="font-[Manrope] text-2xl font-extrabold ml-12 ">tuluv</p>
          <div className="flex w-[318px] justify-between m-auto pt-16">
            <img src="Dayhome.png"></img>
            <img src="Pin.png"></img>
            <img src="Heart.png"></img>
            <img src="User.png"></img>
          </div>
        </div>
      </div>

      <div className="bg-[#0F141E] flex-1 h-screen w-screen flex justify-center relative z-0">
        <div className="w-[414px] h-[828px] bg-[#0F141E]/30 backdrop-blur-md rounded-[48px] mt-36 absolute">
          <div className="flex justify-between items-center">
            <div>
              <h6 className="ml-10 pt-5 text-[18px] text-cool-gray-400 font-[Manrope] font-medium">
                date
              </h6>
              <h1 className="ml-10 text-[48px] text-white font-[Manrope] font-medium">
                City
              </h1>
            </div>
            <img className="w-8 h-8 mr-10" src="loc-pin.png"></img>
          </div>

          <img className="m-auto" src="moon.png"></img>
          <h2 className="text-[144px] font-[Manrope] font-extrabold ml-12">
            hem
          </h2>
          <p className="font-[Manrope] text-2xl font-extrabold ml-12 text-purple-bright">tuluv</p>
          <div className="flex w-[318px] justify-between m-auto pt-16">
            <img src="Dayhome.png"></img>
            <img src="Pin.png"></img>
            <img src="Heart.png"></img>
            <img src="User.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
