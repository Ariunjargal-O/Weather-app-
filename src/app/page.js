"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );

      const countries = await response.json();

      const arr = [];

      countries.data.map((country) => {
        country.cities.map((city) => arr.push(`${city}, ${country.country}`));
      });
      setCountries(arr);
    };
    getData();
  }, []);

  const onChangeSearchValue = (e) => {
    const data = countries
      .filter((country) => country.toLowerCase().startsWith(e.target.value))
      .slice(0, 4);
    setFilteredCountries(data);

    setFilteredCountries;
  };

  return (
    <div>
      <div className="flex flex-col h-screen sm:flex-row w-full">
        <div className="bg-[#f2f4f6] flex-1 h-screen w-screen relative flex justify-center z-0">
          <div>
            <div className="flex items-center w-[567px] h-20 rounded-[48px] bg-white pr-5 pl-4 mt-10 ml-10 relative z-10">
              <img className="w-12 h-12" src="search.png" />
              <input
                placeholder="Search"
                type="search"
                className="bg-transparent flex-1 text-[32px] outline-none"
                onChange={onChangeSearchValue}
              />
            </div>

            {filteredCountries.length ? (
              <div className="flex bg-white w-[567px] h-auto rounded-[16px] ml-10 mt-2 absolute z-50">
                <div className="py-4">
                  {filteredCountries.map((country, index) => (
                    <div
                      className="flex items-center text-[28px] font-bold gap-[10px]"
                      key={country + index}
                    >
                      <img className="ml-4" src="Pin.png"></img>
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <img className=" w-44 h-44  ml-16 mt-[-40px] " src="day.png"></img>
          </div>
          <div className="w-[414px] h-[828px] bg-white/30 backdrop-blur-md rounded-[48px] mt-36 absolute shadow-lg">
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
            <h2 className="text-[144px] font-[Manrope] font-extrabold ml-12 bg-clip-text text-transparent bg-gradient-to-b from-black from-white ">
              hem
            </h2>
            <p className="font-[Manrope] text-2xl font-extrabold ml-12 ">
              tuluv
            </p>
            <div className="flex w-[318px] justify-between m-auto pt-16">
              <img src="Dayhome.png"></img>
              <img src="Pin.png"></img>
              <img src="Heart.png"></img>
              <img src="User.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-[#0F141E] flex-1 h-screen w-screen flex justify-center relative z-0">
          <div className="w-[414px] h-[828px] bg-[rgba(17, 24, 39, 0.75) ]/30 backdrop-blur-md rounded-[48px] mt-36 absolute z-30 shadow-lg">
            <div className="bg-gradient-to-b from-[#1F2937 0%] to-[rgba(17, 24, 39, 0.00)]">
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
            </div>
            <h2 className="text-[144px] font-[Manrope] font-extrabold ml-12 bg-gradient-to-b from-white to-black text-transparent bg-clip-text">
              hem
            </h2>
            <p className="font-[Manrope] text-2xl font-extrabold ml-12 text-purple-bright">
              tuluv
            </p>
            <div className="flex w-[318px] justify-between m-auto pt-16">
              <img src="NightHome.png"></img>
              <img src="NightPin.png"></img>
              <img src="NightHeart.png"></img>
              <img src="NightUser.png"></img>
            </div>
          </div>
          <img
            className="w-34 h-34 ml-[390px] mt-[900px] absolute z-0"
            src="Nigth.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
