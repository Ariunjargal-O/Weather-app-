"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Ulaanbaatar");
  const [currentForecast, setCurrentForecast] = useState(null);

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

  useEffect(() => {
    const getCurrentTemp = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=64bff75e8c32478fbc631050251302&q=${selectedCountry}`
      );
      const currentTemp = await response.json();
      setCurrentForecast(currentTemp);
    };
    getCurrentTemp();
  }, [selectedCountry]);

  const onChangeSearchValue = (e) => {
    const data = countries
      .filter((country) => country.toLowerCase().startsWith(e.target.value))
      .slice(0, 4);
    setFilteredCountries(data);
  };

  const selectCountry = (index) => {
    setSelectedCountry(filteredCountries[index]);
    setFilteredCountries([]);
  };

  if (!currentForecast) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col h-screen sm:flex-row w-full">
        <div className="bg-[#f2f4f6] flex-1 h-screen w-screen relative flex justify-center">
          <div>
            <div className="flex items-center w-[567px] h-20 rounded-[48px] bg-white pr-5 pl-4 mt-10 ml-10 relative z-30">
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
                <div className="flex bg-white w-[567px] h-auto rounded-[16px] ml-10 mt-2 absolute ">
                  <div className="py-4 ">
                    {filteredCountries.map((country, index) => (
                      <div
                        className="flex items-center text-[28px] font-bold gap-[10px]"
                        onClick={() => selectCountry(index)}
                        key={country + index}
                      >
                        {""}
                        <img className="ml-4" src="Pin.png"></img>
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            <img className=" w-44 h-44  ml-16 mt-[-40px] " src="day.png"></img>
          </div>
          <div className="w-[414px] h-[828px] bg-white/30 backdrop-blur-md rounded-[48px] mt-36 absolute shadow-lg z-30">
            <div className="flex justify-between items-center">
              <div>
                <h6 className="ml-10 pt-5 text-[20px] text-[#6B7280] font-[Manrope] font-medium">
                  {currentForecast.forecast.forecastday[0].date}
                </h6>
                <div>
                  <h1 className="ml-10 text-[48px] text-cool-gray-900 font-[Manrope] font-medium">
                    {selectedCountry}
                  </h1>
                </div>
              </div>
              <img className="w-8 h-8 mr-10" src="loc-pin.png"></img>
            </div>

            <img className="m-auto" src="sun.png"></img>
            <div>
              {currentForecast && (
                <h2 className="text-[144px] font-[Manrope] font-extrabold ml-12 bg-clip-text text-transparent bg-gradient-to-b from-[#111827] to-[#6B7280]/60 ">
                  {currentForecast.forecast.forecastday[0].day.maxtemp_c}°
                </h2>
              )}
            </div>
            <p className="font-[Manrope] text-2xl font-extrabold ml-12 text-[#FF8E27]">
              {currentForecast.forecast.forecastday[0].day.condition.text}
            </p>
            <div className="flex w-[318px] justify-between m-auto pt-16">
              <img src="Dayhome.png"></img>
              <img src="Pin.png"></img>
              <img src="Heart.png"></img>
              <img src="User.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-[#0F141E] flex-1 h-screen w-screen flex justify-center relative ">
          <div className="w-[414px] h-[828px] bg-[rgba(17, 24, 39, 0.75) ]/75 backdrop-blur-md rounded-[48px] mt-36 absolute z-30 shadow-lg ">
            <div className="bg-gradient-to-b from-[#1F2937 0%] to-[rgba(17, 24, 39, 0.00)] bg-gradient-to-b from-[#1F2937] to-[#111827]/0 rounded-[48px]">
              <div className="flex justify-between items-center">
                <div>
                  <h6 className="ml-10 pt-5 text-[20px] text-cool-gray-400 font-[Manrope] font-medium">
                    {currentForecast.forecast.forecastday[0].date}
                  </h6>
                  <h1 className="ml-10 text-[48px] text-white font-[Manrope] font-medium">
                    {selectedCountry}
                  </h1>
                </div>
                <img className="w-8 h-8 mr-10" src="loc-pin.png"></img>
              </div>

              <div className="flex">
                <img className="m-auto relative" src="moon.png"></img>
                <img
                  className="m-auto absolute mt-[-80px]"
                  src="moonshadow.png"
                ></img>
              </div>
            </div>
            <h2 className="text-[144px] font-[Manrope] font-extrabold ml-12 bg-gradient-to-b from-white to-black text-transparent bg-clip-text">
              {currentForecast.forecast.forecastday[0].day.mintemp_c}°
            </h2>
            <p className="font-[Manrope] text-2xl font-extrabold ml-12 text-[#777CCE]">
              {currentForecast.forecast.forecastday[0].day.condition.text}
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

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[140px] h-[140px]">
          {" "}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[340px] h-[340px]">
          {" "}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[540px] h-[540px]">
          {" "}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[940px] h-[940px]">
          {" "}
        </div>

        <div className="flex items-center justify-center w-[140px] h-[140px] bg-[#F3F4F6] rounded-full gap-x-4">
          <div>
            <img src="l-logo.png" />
          </div>
          <div>
            <img src="r-logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
